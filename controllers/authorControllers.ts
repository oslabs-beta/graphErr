import database from '../models/database.ts';
import { AuthorResultArray } from '../typedefs.ts';

const authorController: any = {};

authorController.pullAllAuthors = async(mediaType: string) => {
  await database.connect();
  const sqlString = 'SELECT * FROM empty_table'
  const tables = await database.queryArray(sqlString);
  // const tableRows: string[][] = tables.rows as string[][];
  const resultArr: AuthorResultArray = [];
  tables.rows.forEach((el) => {
    resultArr.push(
      { title: el[0] as string}
    );
  });

  return resultArr;
}

export default authorController;