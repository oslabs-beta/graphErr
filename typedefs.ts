// used in newErrors function parameter in newErrors.ts
export type Resolvers = {
  [key: string]: string,
};

// used in applyGQL.ts
export type ExtensionsObject = {
  [key: string]: {graphErr: string}[],
};

// used in applyGQL.ts
export type ErrorResponseBody = {
  errors: {
    graphQLError: string,
    message: string,
  }[],
};

// used in newErrors.ts
export type QueryCache = {
  [key: string]: number,
}

// used in newErrors.ts
export type NewErrorsOutputObj = {
  graphErrResponse: string,
  queryCache: QueryCache,
}

// used in applyGQL.ts
export type Output = {
  startsWith?: string,
  coontains?: string,
  endsWith?: string,
  statusCode?: number,
  graphQLSpecification?: string,
  specificationURL?: string,
}

// used in applyGQL.ts
export type OutputArray = Output[]