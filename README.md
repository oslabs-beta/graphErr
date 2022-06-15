<div align="center">
  <img style="width: 70%" src="assets/graphErr_logo.svg" alt="graphErr logo">
</div>

## GraphErr

Descriptive GraphQL error handling for Deno/Oak servers.

## Features

* Provides additional context to GraphQL's native error messaging.
  * GraphErr's error response describes the cause and source of the issue for faster debugging.
  * Includes a link to refer to the GraphQL specification for more information about the error.
* Gives descriptive error messagages to null responses, identifying the cause of the issue.
  * Traditionally, null responses lack error messaging.
* Enables quick development of GraphQL-equipped router.
* Generates GraphQL Playground IDE, allowing developers to write and execute queries.

## Installation

GraphErr can be imported as a deno module:

The steps will be listed here once our module is up and running on deno land.

## Setting up the Server

Here is an example of a server you can use to run GraphErr:

```
import { Application, Router } from "https://deno.land/x/oak@v10.0.0/mod.ts";
import { applyGraphQL } from "./applyGQL.ts"
import { gql } from 'https://deno.land/x/graphql_tag@0.0.1/mod.ts';

const app = new Application();

// Define the GQL schema using GraphQL-tag (gql). More information on GraphQL-tag below in the README.
const typeDefs = gql`
  type Query {
    allUsers: [User!]!
  }
  type User {
    _id: ID!
    username: String!
    password: String!
  }
`;

// Define resolvers
const resolvers = {
  Query: {
    allUsers: () => {
      return [
      { _id: 1, username: 'JohnDoe', password: 'Password123!' }, 
      { _id: 2, username: 'JaneDoe', password: 'Password1234!!' }
      ]
    },
  },
};

const GraphQLService = await applyGraphQL<Router>({
  Router,
  typeDefs: typeDefs,
  resolvers: resolvers,
})

app.use(GraphQLService.routes(), GraphQLService.allowedMethods());

await app.listen({ port: 3000 });
```
* In addition to importing the _GraphErr_ Deno 3rd Party Module, you must also import the _oak_ module and GraphQL-tag (gql)
  * [GraphQL-tag](https://github.com/apollographql/graphql-tag) (gql) is a Javascript template literal tag that parses GraphQL query strings into the standard GraphQL AST.

## Making a Query

Here is an example query in the GraphQL playground:

```
query {
  allUsers {
    username
  }
}
```

The response would look like:

<div align="left">
  <img style="width: 100%" src="assets/example_query_response.png" alt="example query for getting all users with username">
</div>

## GraphErr Functionality

Example of GraphErr response when the user receives an error (null response) that GraphQL does not natively provide error messaging for:

<div align="left">
  <img style="width: 100%" src="assets/graphErr_msg_example2.png" alt="example query with graphErr response for non native GraphQL err">
</div>

<br />

Example of GraphErr response for a native GraphQL error:

<div align="left">
  <img style="width: 100%" src="assets/graphErr_msg_example.png" alt="example query with graphErr response for handling native GraphQL err">
</div>


## Suggestions

We would love to hear from you!

GraphErr is currently in beta. If you would like to contribute please contact the authors.

Notice any issues or bugs? Please open an issue!

## Authors

[Thomas Seo](https://github.com/thomasseo1)

[Maxwell Cook](https://github.com/maxwellcook)

[Clay Sawyer](https://github.com/claysawyer)

[Loralyn Milcarek](https://github.com/loralyn-milcarek)

[Avi Kerson](https://github.com/avitacos)

## Documentation

[graphErr.land](google.com)

[Our medium article](google.com)
