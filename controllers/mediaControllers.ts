import database from '../models/database.ts';
import { MediaResultArray } from '../typedefs.ts'

const mediaController: any = {};

// Query to pull all media
mediaController.pullAllMedia = async() => {
  await database.connect();
  const tables = await database.queryArray('SELECT * FROM "public"."Media"');
  const resultArr: MediaResultArray = [];
  // Loop through tables.rows to create array of objects called resultArr
  // resultArr's elements' properties match the Media object type in typedef.ts 
  tables.rows.forEach((el) => {
    resultArr.push(
      { _id: el[0] as number, type: el[1] as string, title: el[2] as string}
    );
  });
  return resultArr;
}

// Query to pull media by type (e.g., book, movie, music)
mediaController.pullMediaByType = async(mediaType: string) => {
  await database.connect();
  // The below SQL query filters based on type.
  // type comes from the argument mediaType that is passed into this middleware function
  // the mediaType argument is supllied by the client's GQL query
  const sqlString = `SELECT * FROM "public"."Media" WHERE type = $1;`
  const tables = await database.queryArray(
    sqlString,
    [mediaType]
  );
  const resultArr: MediaResultArray = [];
  // Loop through tables.rows to create array of objects called resultArr
  // resultArr's elements' properties match the Media object type in typedef.ts 
  tables.rows.forEach((el) => {
    resultArr.push(
      { _id: el[0] as number , type: el[1] as string, title: el[2] as string}
    );
  });
  return resultArr;
}

export default mediaController;