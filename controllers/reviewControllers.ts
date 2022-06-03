import database from '../models/database.ts';

const reviewController: any = {};

reviewController.pullAllReviews = async() => {
  await database.connect();
  const tables = await database.queryArray('SELECT * FROM "public"."reviews"');
  const resultArr: any = [];
  tables.rows.forEach((el) => {
    resultArr.push(
      { _id: el[0], user_id: el[1], media_id: el[2], review: el[3], rating: el[4] }
    );
  });
  return resultArr;
}

export default reviewController;