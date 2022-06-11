import { typeDefs, Resolvers, QueryCache } from '../typedefs.ts';

export const newErrors = (gqlQuery : string, resolvers: Resolvers) : string => {
  // Below converts list of queries from object to array so that we can easily iterate through it
  const queryList: string[] = Object.keys(resolvers);
  let queryName = '';
  // loop through queryList. For each element, check if given element exists in gqlQuery
  // This isn't dynamic? How would it handle if there were two queries?
  // Ideas below for how to make the queryName dyanmic. We'll need to pass in response.body.data and check the query name from there against gqlQuery
  // const cache: QueryCache = {};
  for (let i = 0; i < queryList.length; i++) {
    // if (gqlQuery.includes(queryList[i]) && !cache[queryList[i]]) {
    if (gqlQuery.includes(queryList[i])) {
      queryName = queryList[i];
      // cache[queryList[i]] = 'Query'
    }
  }



  // Below conditional helps with TypeScript issue where typeDefs is possibly undefined. 
  // This way, we ensure typeDefs and its necessary properties are defined before proceeding
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

    // First check if the client's query included an argument
    if (gqlQuery.includes(queryNamePlusArg)) {
      return 'Provided argument not found. Please enter a valid argument.'
    // Next check if the client's query accepts an argument
    } else if (gqlQuery.includes(queryName) && acceptsArg) {
      return 'No argument provided. Please provide a valid argument. You may want to consider requiring the argument in your schema.'
    // If neither of the above criteria were met, then the null response was not caused by issues with query parameters
    // We can then conclude that something else caused the null response - most likely querying an empty table
    } else {
      return 'Table is empty or other error has occured.'
    }

  // Closing out the aformentioned TypeScript issue. If typeDefs.loc does not exist, then we know it's a Typedefs.loc issue
  // Should never get to this point though
  } else return 'Typedefs.loc issue';

}
