import database from '../models/database.ts';
// import { MediaOutput } from '../typedefs.ts'

const mediaController: any = {};

mediaController.pullAllMedia = async() => {
  await database.connect();
  const tables = await database.queryArray('SELECT * FROM "public"."Media"');
  // iterate through each subarray in tables array and push each element of subarray to new object in array
  const resultArr: any = [];
  tables.rows.forEach((el) => {
    resultArr.push(
      { _id: el[0], type: el[1], title: el[2] }
    );
  });
  // console.log(resultArr);
  return resultArr;
}

 mediaController.pullMediaByType = async(mediaType: string) => {
  await database.connect();
  const sqlString = `SELECT * FROM "public"."Media" WHERE type = $1;`
  const tables = await database.queryArray(
    sqlString,
    [mediaType]
  );
  const resultArr: any = [];
  tables.rows.forEach((el) => {
    resultArr.push(
      { _id: el[0], type: el[1], title: el[2] }
    );
  });
  return resultArr;
}

// Below is partially done (from last week)
// mediaController.createMedia = async() => {
//   await database.connect();
//   const sqlString = `INSERT INTO "public"."Media" (type, title) VALUES ($1, $2);`;
//   const newMediaInputs = ['movie', 'Snakes on a Plane 10'];
//   const tables = await database.queryArray(
//     sqlString,
//     newMediaInputs
//   );
// }

export default mediaController;