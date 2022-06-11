import { gql } from 'https://deno.land/x/graphql_tag@0.0.1/mod.ts';

export const typeDefs = gql`
  type Mutation {
    addUser(username: String, password: String): [User!]
  }

  type Query {
    allMedia: [Media!]!
    allUsers: [User!]!
    allReviews: [Review!]!
    mediaByType(mediaType: String): [Media!]
    userById(userId: Int): [User!]
    allAuthors: [Authors]
  }
  
  type Authors {
    title: String
  }

  type Media {
    _id: ID!
    type: String!
    title: String!
  }

  type User {
    _id: ID!
    username: String!
    password: String!
    status: String
  }

  type Review {
    _id: ID!
    user_id: ID!
    media_id: ID!
    review: String
    rating: Int
  }
`;

export type MediaType = {
  mediaType: string;
};

export type UserId = {
  userId: number;
};

export type AddUserMutation = {
  username: string;
  password: string;
};

// export type pullMediaByType = {
//   mediaType: string!
// }

// use for resultArr in mediaControllers.ts
export type MediaOutput = {
  _id: number;
  type: string;
  title: string;
}[];

// used in newErrors function parameter in newErrors.ts
export type Resolvers = {
  [key: string]: string;
};

// used in applyGQL.ts
export type ExtensionsObject = {
  [key: string]: {graphErr: string}[];
};

// used in authorController.ts
export type AuthorResultArray = {
  title: string;
}[];

// used in mediaControllers.ts
export type MediaResultArray = {
  _id: number;
  type: string;
  title: string;
}[];

// used in mediaControllers.ts
export type ReviewResultArray = {
  _id: number;
  user_id: number;
  media_id: number;
  review: string;
  rating: number;
}[];

// used in mediaControllers.ts
export type UserResultArray = {
  _id: number;
  username: string;
  password: string;
  status: string;
}[];

// used in applyGQL.ts
export type ErrorResponseBody = {
  errors: {
    graphQLError: string;
    message: string;
  }[];  
};

export type QueryCache = {
  [key: string]: string;
}

// used in authorController.ts
// export type AuthorController = {
//   [key: string]: function;
// }