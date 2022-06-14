// deno-lint-ignore-file no-explicit-any
import { gql, graphql } from "https://deno.land/x/oak_graphql@0.6.3/deps.ts";
import { ISettings, renderPlaygroundPage} from "https://deno.land/x/oak_graphql@0.6.3/graphql-playground-html/render-playground-html.ts";
import { makeExecutableSchema } from "https://deno.land/x/oak_graphql@0.6.3/graphql-tools/schema/makeExecutableSchema.ts";
import { fileUploadMiddleware, GraphQLUpload } from "https://deno.land/x/oak_graphql@0.6.3/fileUpload.ts";
import { OutputArray, ExtensionsObject } from "./typedefs.ts";
import { errorHandler } from "./errorHandling/nativeErrors.ts";
import { newErrorsHandler } from "./errorHandling/newErrorsHandler.ts";

interface Constructable<T> {
  new(...args: any): T & OakRouter;
}

interface OakRouter {
  post: any;
  get: any;
}

export interface ApplyGraphQLOptions<T> {
  Router: Constructable<T>;
  path?: string;
  typeDefs: any;
  resolvers: ResolversProps;
  context?: (ctx: any) => any;
  usePlayground?: boolean;
  settings?: ISettings;
}
 
export interface ResolversProps {
  Query?: any;
  Mutation?: any;
  [dynamicProperty: string]: any;
}

export async function applyGraphQL<T>({
  Router,
  path = "/graphql",
  typeDefs,
  resolvers,
  context,
  usePlayground = true,
  settings,
}: ApplyGraphQLOptions<T>): Promise<T> {
  const router = new Router();

  const augmentedTypeDefs = Array.isArray(typeDefs) ? typeDefs : [typeDefs];
  augmentedTypeDefs.push(
    gql`
      scalar Upload
    `,
  );
  if (Array.isArray(resolvers)) {
    if (resolvers.every((resolver) => !resolver.Upload)) {
      resolvers.push({ Upload: GraphQLUpload });
    }
  } else {
    if (resolvers && !resolvers.Upload) {
      resolvers.Upload = GraphQLUpload;
    }
  }

  const schema = makeExecutableSchema({
    typeDefs: augmentedTypeDefs,
    resolvers: [resolvers],
  });

  await router.post(path, fileUploadMiddleware, async (ctx: any) => {
    const { response, request } = ctx;
      if (request.hasBody) {
        try {
          const contextResult = context ? await context(ctx) : undefined;
          const body = ctx.params.operations || await request.body().value;
          const result = await (graphql as any)(
            schema,
            body.query,
            resolvers,
            contextResult,
            body.variables || undefined,
            body.operationName || undefined,
          );
          
          response.body = result;
          
          // Check if the response body contains any errors. If so, invoke the errorHandler function change the response
          // and add graphErr details
          if (response.body.errors) {
            const graphErrObj: OutputArray = errorHandler(response.body);
            // Loop through each error message
            for (let i = 0; i < response.body.errors.length; i++) {
              response.body.errors[i].graphQLSpecification = graphErrObj[i].graphQLSpecification;
              response.body.errors[i].specificationURL = graphErrObj[i].specificationURL;
            }
          // If the response body does not contain errors, then we execute logic to determine if there are any null responses
          // If null responses exist, then we add graphErr error messaging to specify what the issue is
          } else {
            // Define extensions object by invoking newErrorsHandler function. Need to pass in entire response body data, 
            // body.query (the entire gql request in string form), resolvers.Query (a list of all possible queries - from the schema), and
            // typeDefs.loc.source.body (essentially the entire schema)
            const extensionsObj: ExtensionsObject = newErrorsHandler(response.body.data, body.query, resolvers.Query, typeDefs.loc.source.body);
            // Only adds an extensions property to the response if newErrorsHandler found any null responses
            if (Object.keys(extensionsObj).length > 0) response.body.extensions = extensionsObj;
            response.status = 200;
          }
          return;
        } catch (error) {
          response.status = 200;
          response.body = {
            data: null,
            errors: [
              {
                message: error.message ? error.message : error,
              },
            ],
          };
          return;
        }
      }
    }, 
  );

  await router.get(path, (ctx: any) => {
    const { request, response } = ctx;
    if (usePlayground) {
      // perform more expensive content-type check only if necessary
      // XXX We could potentially move this logic into the GuiOptions lambda,
      // but I don't think it needs any overriding
      const prefersHTML = request.accepts("text/html");

      if (prefersHTML) {
        const playground = renderPlaygroundPage({
          endpoint: request.url.origin + path,
          subscriptionEndpoint: request.url.origin,
          settings,
        });
        response.status = 200;
        response.body = playground;
        return;
      }
    }
  });

  return router;
}
