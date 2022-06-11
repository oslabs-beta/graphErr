import database from '../models/database.ts';
import { ReviewResultArray } from '../typedefs.ts';

const reviewController: any = {};

reviewController.pullAllReviews = async() => {
  await database.connect();
  const tables = await database.queryArray('SELECT * FROM "public"."reviews"');
  const resultArr: ReviewResultArray = [];
  tables.rows.forEach((el) => {
    resultArr.push(
      { _id: el[0] as number, user_id: el[1] as number, media_id: el[2] as number, review: el[3] as string, rating: el[4] as number}
    );
  });
  return resultArr;
}

export default reviewController;