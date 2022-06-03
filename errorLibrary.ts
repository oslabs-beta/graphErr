export const graphErrLibrary = [
  // {
  //   standardError: "Unhandled Error",
  //   statusCode: 0,
  //   graphErr: "Unknown",
  //   graphQLSpec: "Unknown"

  // },
    {
      standardError: "Cannot query field",
      statusCode: 500,
      graphErr: "Internal Server Error. Check your resolvers and query formulations.",
      graphQLSpec: "5.3.1. Field Selections: https://spec.graphql.org/draft/#sec-Field-Selections"
    },

  ];