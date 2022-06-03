import { Application, Router } from "https://deno.land/x/oak@v10.0.0/mod.ts";
import { applyGraphQL } from "./applyGQL.ts"
// import { GQLError, applyGraphQL } from "https://deno.land/x/oak_graphql@0.6.3/mod.ts";
import { typeDefs } from "./typedefs.ts";
import { resolvers } from "./resolvers/resolvers.ts";

const app = new Application();

const GraphQLService = await applyGraphQL<Router>({
  Router,
  typeDefs: typeDefs,
  resolvers: resolvers,
  // Extensions is not being used currently. We may want to use it if we change how we manipulate the error message
  extensions: '',
})

const graphErr = (next: any) => {
  console.log('this is the graphErr function');
  return next();
}

// Maybe later add middleware function below
app.use(GraphQLService.routes(), GraphQLService.allowedMethods(), graphErr(() => console.log('done')));

await app.listen({ port: 3000 });
