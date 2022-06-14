import { ErrorResponseBody, Output, OutputArray } from '../typedefs.ts'
import { graphErrLibrary } from "../errorLibrary.ts";

export const errorHandler = (resBody: ErrorResponseBody) : Output[] => {
  const output: OutputArray = [];

  resBody.errors.forEach((error: any) => {
    for (let i = 0; i < graphErrLibrary.length; i ++) {
      const start : string | undefined = graphErrLibrary[i].startsWith;
      const contain : string | undefined = graphErrLibrary[i].contains;
      const end : string | undefined = graphErrLibrary[i].endsWith;
      const matchingString : string = error.message;

      if (start && contain && end) {
        if (matchingString.startsWith(start) && matchingString.includes(contain) && matchingString.endsWith(end)) {
          output.push(graphErrLibrary[i]);
        }
      } else if (start && contain) {
        if (matchingString.startsWith(start) && matchingString.includes(contain)) {
          output.push(graphErrLibrary[i]);
        }
      } else if (contain && end) {
        if (matchingString.includes(contain) && matchingString.endsWith(end)) {
          output.push(graphErrLibrary[i]);
        }
      } else if (start && end) {
          if (matchingString.startsWith(start) && matchingString.endsWith(end)) {
            output.push(graphErrLibrary[i]);
          }
      } else if (start) {
       if (matchingString.startsWith(start)) {
        output.push(graphErrLibrary[i]);
       }
      } else if (contain) {
        if (matchingString.includes(contain)) {
          output.push(graphErrLibrary[i]);
        }
      } else if (end) {
        if (matchingString.endsWith(end)) {
          output.push(graphErrLibrary[i]);
        }
      }
    }
    if (!output[0]) output.push({graphQLSpecification: 'Error not found in specification', specificationURL: "https://spec.graphql.org/"});
  });
  return output;
}