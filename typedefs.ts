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
    allAuthors: [Authors]
  }
  type Authors {
    title: String

    userById(userId: Int): [User!]
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

export type Resolvers = {
  [key: string]: string;
};
