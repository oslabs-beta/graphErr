import database from '../models/database.ts';
import { UserResultArray } from '../typedefs.ts';

const userController: any = {};

userController.pullAllUsers = async () => {
  await database.connect();
  const tables = await database.queryArray('SELECT * FROM "public"."User"');
  // iterate through each subarray in tables array and push each element of subarray to new object in array
  const resultArr: UserResultArray = [];
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

// example controller middleware to mock internal validation errors
userController.pullUserById = async (userId: number) => {
  await database.connect();
  const sqlString = `SELECT * FROM "public"."User" WHERE _id = $1 and status = 'active';`;
  const tables = await database.queryArray(sqlString, [userId]);
  const resultArr: UserResultArray = [];
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

//middleware for mutation creating user
userController.addUser = async (username: string, password: string) => {
  await database.connect();
  const sqlString = `INSERT INTO "public"."User" (username, password) VALUES ($1, $2) RETURNING *;`;
  const tables = await database.queryArray(sqlString, [username, password]);
  const resultArr: UserResultArray = [];
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
