import database from '../models/database.ts';

const userController: any = {}

userController.pullAllUsers = async() => {
  await database.connect();
  const tables = await database.queryArray('SELECT * FROM "public"."User"');
  // iterate through each subarray in tables array and push each element of subarray to new object in array
  const resultArr: any = [];
  tables.rows.forEach((el) => {
    resultArr.push(
      { _id: el[0], username: el[1], password: el[2] }
    );
  });
  // console.log(resultArr);
  return resultArr;
}

export default userController;