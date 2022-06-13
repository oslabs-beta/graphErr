// deno-lint-ignore-file
import { MediaType, UserId, AddUserMutation } from '../typedefs.ts';
import userController from '../controllers/userControllers.ts';
import mediaController from '../controllers/mediaControllers.ts';
import reviewController from '../controllers/reviewControllers.ts';
import authorController from '../controllers/authorControllers.ts';

export const resolvers = {
  Query: {
    allMedia: () => mediaController.pullAllMedia(),
    allUsers: () => userController.pullAllUsers(),
    allReviews: () => reviewController.pullAllReviews(),
    allAuthors: () => authorController.pullAllAuthors(),
    // below parameters are any type because they're required but not used
    mediaByType: (_root: any, args: MediaType, _context: any, _info: any) => {
      return mediaController.pullMediaByType(args.mediaType);
    },
    userById: (_root: any, args: UserId, _context: any, _info: any) => {
      return userController.pullUserById(args.userId);
    },
  },
  Mutation: {
    addUser: (_root: any, args: AddUserMutation, _context: any, _info: any) => {
      return userController.addUser(args.username, args.password);
    },
  },
};
