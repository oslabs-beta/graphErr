 import { ExtensionsObject, QueryCache, NewErrorsOutputObj, Resolvers } from "../typedefs.ts";
 import { newErrors } from "./newErrors.ts";
 
 // Function that handles looping through query responses
 // resBodyData has an "any" type because the response varies greatly
 export const newErrorsHandler = (resBodyData: any, gqlQuery: string, resolvers: Resolvers) : ExtensionsObject => {
  // Object to store extensions
  const extensionsObj: ExtensionsObject = {};
  // Object to store cache of queries
  let queryCacheObj: QueryCache = {};
  // loop through all response arrays 
    for (const queryName in resBodyData) {
    // check for null responses. A null response indicates that we need to modify the response message
    if (resBodyData[queryName].length === 0) {
      // Invoke newErrors and store the graphErr response message and queryCache on the newErrorsResult object
      const newErrorsResult: NewErrorsOutputObj = newErrors(gqlQuery, resolvers, queryName, queryCacheObj);
      // Creates new property on extensionsObj, setting the graphErr response message as the evaluated result of invoking newErrors
      extensionsObj[queryName] = [{graphErr: newErrorsResult.graphErrResponse}];
      // Assings queryCacheObj the updated cacheObj value, which has been processed and returned by the newErrors function
      queryCacheObj = newErrorsResult.queryCache;
    }
    }
  // Adds/defines extensions property after looping (only if any queries returned an empty/null response) 
  // if (Object.keys(extensionsObj).length !== 0) 
  return extensionsObj; 
  }