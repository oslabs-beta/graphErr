import { typeDefs, Resolvers, QueryCache, NewErrorsOutputObj } from '../typedefs.ts';

export const newErrors = (gqlQuery: string, resolvers: Resolvers, currentQuery: string, queryCache: QueryCache) : NewErrorsOutputObj => {
  // Object that this function returns
  const outputObj: NewErrorsOutputObj = {
    graphErrResponse: '', 
    queryCache,
  }

  let queryName = '';
  // The variable currentQuery is the current query that we're evaluating. This function evaluates one GQL query at a time
  // If currentQuery has an alias, then currentQuery will just be equal to the alias, but we need to know the actual query name too
  // Check if currentQuery is an alias by checking if currentQuery is in resolvers
  if (resolvers[currentQuery] !== undefined) {
    // If currentQuery is in resolvers, then it's not an alias and queryName is just the current query
    queryName = currentQuery;
  } else {
    // If currentQuery is an alias (not in resolvers), then determine query name by checking currentQuery against
    // gqlQuery (entire query) and matching alias to actual query
    // Index at which the given alias starts. Includes trailing colon key in case an alias is similar to a query name
    const aliasCharStart: number = gqlQuery.indexOf(currentQuery + ':');
    // Index at which the given alias ends
    const aliasCharEnd: number = aliasCharStart + currentQuery.length;
    // Index at which the actual query name associated with the alias starts. Will always be start + 2 (for colon key and space --> ": ")
    const aliasQueryNameStart: number = aliasCharEnd + 2;
    // Find the index at which the actual query name associated with the alias ends
    let aliasQueryNameEnd: number = gqlQuery.indexOf('(', aliasQueryNameStart);
    if (aliasQueryNameEnd < 0) {
      aliasQueryNameEnd = gqlQuery.indexOf(' ', aliasQueryNameStart);
    } else {
      aliasQueryNameEnd = Math.min(aliasQueryNameEnd, gqlQuery.indexOf(' ', aliasQueryNameStart));
    }
    queryName = gqlQuery.slice(aliasQueryNameStart, aliasQueryNameEnd);
  } 

  // Store queryName in queryCache. Property values represents the number of times a particular query has been cached
  // Property values start at 1 and are incremented by 1 each time a query is stored to the cache
  queryCache[queryName] === undefined ? queryCache[queryName] = 1 : queryCache[queryName] += 1;

  // The conditional below helps with TypeScript issue where typeDefs is possibly undefined. 
  // This way, we ensure typeDefs' necessary properties are defined before proceeding
  if (typeDefs.loc) {
    // Below extracts the schema from the imported and more complicated typeDefs object
    const schema: string  = typeDefs.loc.source.body;
    // Index at which the given query starts
    const queryCharStart: number = schema.indexOf(queryName);
    // Below determines if the given query accepts an argument
    const acceptsArg: boolean = schema[queryName.length + queryCharStart] === '(';
    // Below determines when the given query ends (only applies if the query accepts an arg)
    const argCharEnd: number = schema.indexOf(':', queryCharStart);
    // Defines the query name plus argument. This variable allows us to determine if an argument was provided,
    // which allows us to differentiate between situations where the provided argument was incorrect or the argument is missing entirely
    const queryNamePlusArg: string = schema.slice(queryCharStart, argCharEnd + 1);

    // count the number of times the current query appears in gqlString
    const currentQueryNum: number = gqlQuery.split(queryName).length - 1;

    // Below is the process for extracting the exact query that is currently being processed with the function
    // Only applicable to situations where a request repeats the same query, so we first check if the current query appears 
    // more than once in the request (gqlString)
    if (currentQueryNum > 1) {
      // Create array of split on every instance of the query name
      const splitArray: string[] = gqlQuery.split(queryName)
      console.log(splitArray);
      // Defines when the current query starts in the gqlQuery string by adding the length of the previous array element to the 
      // index in the string where the previous array element begins. E.g., the first element of splitArray will start at 0,
      // then we add splitArray[0]'s length to 0, and that's the index in the string at which the first instance of the given
      // query will begin
      const queryStart: number = gqlQuery.indexOf(splitArray[queryCache[queryName] - 1]) + splitArray[queryCache[queryName] - 1].length;
      // Defines the current query ends in the gqlQuery string by adding the length of the current array element to the 
      // index in the string where the previous element begins
      // Need to ensure that queryEnd comes after queryStart by supplying the second arg to indexOf. Applies to 
      // situations where there's a duplicate element in splitArray
      const queryEnd: number = gqlQuery.indexOf(splitArray[queryCache[queryName]], queryStart) + splitArray[queryCache[queryName]].length;
      console.log(queryStart, queryEnd)
      // Re-assign gqlQuery string the value of the previous gqlQuery sliced, starting and ending at the variables shown below
      gqlQuery = gqlQuery.slice(queryStart, queryEnd);
    }

    console.log(currentQueryNum, gqlQuery);

    // First check if the client's query included an argument
    if (gqlQuery.includes(queryNamePlusArg)) {
      outputObj.graphErrResponse = 'Provided argument not found. Please enter a valid argument.'
    // Next check if the client's query accepts an argument
    } else if (gqlQuery.includes(queryName) && acceptsArg) {
      outputObj.graphErrResponse = 'No argument provided. Please provide a valid argument. You may want to consider requiring the argument in your schema.'
    // If neither of the above criteria were met, then the null response was not caused by issues with query parameters
    // We can then conclude that something else caused the null response - most likely querying an empty table
    } else {
      outputObj.graphErrResponse = 'Table is empty or other error has occured.'
    }

  // Closing out the aformentioned TypeScript issue. If typeDefs.loc does not exist, then we know it's a Typedefs.loc issue
  // Should never get to this point though
  } else outputObj.graphErrResponse = 'Typedefs.loc issue';

  return outputObj;
}
