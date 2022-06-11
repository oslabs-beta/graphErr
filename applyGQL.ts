// deno-lint-ignore-file no-explicit-any
// maybe go through the file and clean up TypeScript any types
import { gql, graphql } from "https://deno.land/x/oak_graphql@0.6.3/deps.ts";
import { ISettings, renderPlaygroundPage} from "https://deno.land/x/oak_graphql@0.6.3/graphql-playground-html/render-playground-html.ts";
import { makeExecutableSchema } from "https://deno.land/x/oak_graphql@0.6.3/graphql-tools/schema/makeExecutableSchema.ts";
import { fileUploadMiddleware, GraphQLUpload } from "https://deno.land/x/oak_graphql@0.6.3/fileUpload.ts";
import { graphErrLibrary } from "./errorLibrary.ts";
import { newErrors } from "./errorHandling/newErrors.ts"
import { ExtensionsObject } from "./typedefs.ts"

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
  extensions: string;
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
  extensions,
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

  type Output = {
    standardError?: string,
    statusCode?: number,
    graphQLSpecification?: string,
    specificationURL?: string,
  }

  type OutputArray = Output[]

  const errorHandler = (resBody: any) : Output[] => {
    const output: OutputArray = [];
    // console.log('res body', resBody.errors[0].message)
    for (let j = 0; j < resBody.errors.length; j++) {
      // console.log(j);
      for (let i = 0; i < graphErrLibrary.length; i++) {
        // console.log(i);
        console.log(graphErrLibrary[i].standardError, resBody.errors[j].message);
        if (resBody.errors[j].message.startsWith(graphErrLibrary[i].standardError)) {
          // possibly change later to return here instead to make more performant
          output.push(graphErrLibrary[i]);
        }
      }
    }
    // console.log(output);
    return output;
  }

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
          
          if (response.body.errors) {
            const graphErrObj: OutputArray = errorHandler(response.body);
            for (let i = 0; i < response.body.errors.length; i++) {
              response.body.errors[i].graphQLSpecification = graphErrObj[i].graphQLSpecification;
              response.body.errors[i].specificationURL = graphErrObj[i].specificationURL;
            }
          } else {
            // Object to store extensions
            const extensionsObj : ExtensionsObject = {};
            // loop through all other response arrays 
             for (const queryName in response.body.data) {
              // check for null responses. A null response indicates that we need to modify the response message
              if (response.body.data[queryName].length === 0) {
                // Creates new property on extensionsObj, setting the graphErr response as the evaluated result of invoking newErrors
                extensionsObj[queryName] = [{graphErr: newErrors(body.query, resolvers.Query)}]
              }
             }
            console.log(extensionsObj);
            // Adds/defines extensions property after looping (only if any query returned and empty/null response) 
            if (Object.keys(extensionsObj).length !== 0) response.body.extensions = extensionsObj; 
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
    console.log(extensions);
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
