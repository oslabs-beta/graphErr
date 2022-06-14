<div align="center">
  <img style="width: 70%" src="assets/graphErrLogo.svg" alt="graphErr logo">
</div>

# GraphErr

Descriptive error handling for GraphQL in Deno for Oak servers

## Installation

GraphErr can be imported as a deno module:

The steps will be listed here once our module is up and running on deno land.

## Setting up the Server

Here is an example of a server you can use to run GraphErr:

```
import { Application, Router } from "https://deno.land/x/oak@v10.0.0/mod.ts";
import { applyGraphQL } from "./applyGQL.ts"
import { typeDefs } from "./typedefs.ts";
import { resolvers } from "./resolvers/resolvers.ts";

const app = new Application();

const GraphQLService = await applyGraphQL<Router>({
  Router,
  typeDefs: typeDefs,
  resolvers: resolvers,
})

app.use(GraphQLService.routes(), GraphQLService.allowedMethods());

await app.listen({ port: 3000 });
```

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
  <img style="width: 100%" src="assets/Screen Shot 2022-06-14 at 11.30.58 AM.png" alt="example query for getting all users with username">
</div>


## Making a Query that would display GraphErr functionality

<div align="left">
  <img style="width: 100%" src="assets/graphErr msg example.png" alt="example query with graphErr response">
</div>


### Suggestions

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
