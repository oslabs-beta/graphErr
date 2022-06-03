// deno-lint-ignore-file
import { MediaType } from '../typedefs.ts'
import userController from '../controllers/userControllers.ts';
import mediaController from '../controllers/mediaControllers.ts';
import reviewController from '../controllers/reviewControllers.ts';

export const resolvers = { 
  Query: { 
    allMedia: () => mediaController.pullAllMedia(),
    allUsers: () => userController.pullAllUsers(),
    allReviews: () => reviewController.pullAllReviews(),
    // below parameters are any type because they're required but not used
    mediaByType: (_root: any, args: MediaType, _context: any, _info: any) => {
      return mediaController.pullMediaByType(args.mediaType);
    }
  }, 
  // Mutation: {
  //   insertPosition: (_: any, args: any ) => console.log(args)
  // }
}
