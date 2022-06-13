import database from '../models/database.ts';
import { UserResultArray } from '../typedefs.ts';

const userController: any = {};

// Query to pull all users
userController.pullAllUsers = async () => {
  await database.connect();
  const tables = await database.queryArray('SELECT * FROM "public"."User"');
  const resultArr: UserResultArray = [];
  // Loop through tables.rows to create array of objects called resultArr
  // resultArr's elements' properties match the User object type in typedef.ts 
  tables.rows.forEach((el) => {
    resultArr.push({
      _id: el[0] as number,
      username: el[1] as string,
      password: el[2] as string,
      status: el[3] as string,
    });
  });
  return resultArr;
};

// Query to pull user by Id -- we have some issues with this one though
// example controller middleware to mock internal validation errors
userController.pullUserById = async (userId: number) => {
  await database.connect();
  // The below SQL query filters based on _id and status (status must be active)
  // _id comes from the argument userId that is passed into this middleware function
  // the userId argument is supplied by the client's GQL query
  const sqlString = `SELECT * FROM "public"."User" WHERE _id = $1 and status = 'active';`;
  const tables = await database.queryArray(sqlString, [userId]);
  const resultArr: UserResultArray = [];
  // Loop through tables.rows to create array of objects called resultArr
  // resultArr's elements' properties match the User object type in typedef.ts 
  tables.rows.forEach((el) => {
    resultArr.push({
      _id: el[0] as number,
      username: el[1] as string,
      password: el[2] as string,
      status: el[3] as string,
    });
  });
  return resultArr;
};

userController.addUser = async (username: string, password: string) => {
  await database.connect();
  // The below SQL mutation adds a new user and their username and password
  // username and password are passed into this middleware function as arguments
  // username and password are supplied by the client's GQL mutation request
  // The SQL query returns all information for a given mutation so that there's something to respond to the client with
  const sqlString = `INSERT INTO "public"."User" (username, password) VALUES ($1, $2) RETURNING *;`;
  const tables = await database.queryArray(sqlString, [username, password]);
  const resultArr: UserResultArray = [];
  // Loop through tables.rows to create array of objects called resultArr
  // resultArr's elements' properties match the User object type in typedef.ts 
  tables.rows.forEach((el) => {
    resultArr.push({ 
      _id: el[0] as number,
      username: el[1] as string,
      password: el[2] as string,
      status: el[3] as string,
    });
  });
  return resultArr;
};

export default userController;
