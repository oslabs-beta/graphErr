import database from '../models/database.ts';
import { AuthorResultArray } from '../typedefs.ts';

const authorController: any = {};

// Query to pull all author information
authorController.pullAllAuthors = async() => {
  await database.connect();
  const sqlString = 'SELECT * FROM empty_table'
  const tables = await database.queryArray(sqlString);
  const resultArr: AuthorResultArray = [];
  // Loop through tables.rows to create array of objects called resultArr
  // resultArr's element's properties match the Authors object type in typedef.ts 
  tables.rows.forEach((el) => {
    resultArr.push(
      { title: el[0] as string}
    );
  });

  return resultArr;
}

export default authorController;