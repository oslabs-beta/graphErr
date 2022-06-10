// deno-lint-ignore-file no-explicit-any
// maybe go through the file and clean up TypeScript any types
import { gql, graphql } from 'https://deno.land/x/oak_graphql@0.6.3/deps.ts';
import {
  ISettings,
  renderPlaygroundPage,
} from 'https://deno.land/x/oak_graphql@0.6.3/graphql-playground-html/render-playground-html.ts';
import { makeExecutableSchema } from 'https://deno.land/x/oak_graphql@0.6.3/graphql-tools/schema/makeExecutableSchema.ts';
import {
  fileUploadMiddleware,
  GraphQLUpload,
} from 'https://deno.land/x/oak_graphql@0.6.3/fileUpload.ts';
import { graphErrLibrary } from './errorLibrary.ts';
import { newErrors } from './errorHandling/newErrors.ts';

interface Constructable<T> {
  new (...args: any): T & OakRouter;
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
  path = '/graphql',
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
    `
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
    standardError?: string;
    statusCode?: number;
    graphErr?: string;
    graphQLSpec?: string;
  };

  type OutputArray = Output[];

  const errorHandler = (resBody: any): Output[] => {
    const output: OutputArray = [];
    // console.log('res body', resBody.errors[0].message)
    for (let j = 0; j < resBody.errors.length; j++) {
      // console.log(j);
      for (let i = 0; i < graphErrLibrary.length; i++) {
        // console.log(i);
        console.log(
          graphErrLibrary[i].standardError,
          resBody.errors[j].message
        );
        if (
          resBody.errors[j].message.startsWith(graphErrLibrary[i].standardError)
        ) {
          // possibly change later to return here instead to make more performant
          output.push(graphErrLibrary[i]);
        }
      }
    }
    // console.log(output);
    return output;
  };

  await router.post(path, fileUploadMiddleware, async (ctx: any) => {
    const { response, request } = ctx;
    // console.log("context98", ctx);
    if (request.hasBody) {
      try {
        const contextResult = context ? await context(ctx) : undefined;
        const body = ctx.params.operations || (await request.body().value);
        // console.log('body', await request.body().value)
        // console.log("THIS", body.query);
        const result = await (graphql as any)(
          schema,
          body.query,
          resolvers,
          contextResult,
          body.variables || undefined,
          body.operationName || undefined
        );

        response.body = result;
        // console.log('RESPONSE', response.body);

        if (response.body.errors) {
          const graphErrObj: OutputArray = errorHandler(response.body);
          for (let i = 0; i < response.body.errors.length; i++) {
            // We're not actually changing status behind the scenes
            response.body.errors[i].statusCode = graphErrObj[i].statusCode;
            response.body.errors[i].graphErr = graphErrObj[i].graphErr;
            response.body.errors[i].graphQLSpec = graphErrObj[i].graphQLSpec;
          }
        } else {
          // loop through all other response arrays
          for (const queryName in response.body.data) {
            // check for null responses
            console.log('TESTING');
            if (response.body.data[queryName].length === 0) {
              response.body.data[queryName].push({
                graphErr: newErrors(body.query, resolvers.Query),
              });
            }
          }
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
  });

  await router.get(path, (ctx: any) => {
    console.log(extensions);
    const { request, response } = ctx;
    if (usePlayground) {
      // perform more expensive content-type check only if necessary
      // XXX We could potentially move this logic into the GuiOptions lambda,
      // but I don't think it needs any overriding
      const prefersHTML = request.accepts('text/html');

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
