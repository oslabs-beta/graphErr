import { typeDefs } from '../typedefs.ts';

export const newErrors = (gqlQuery : any, resolvers: any) : string => {
  // list of queries
  const queryList = Object.keys(resolvers);
  let queryName = '';
  // loop through queryList. For each element, check if given element exists in gqlQuery
  // This isn't dynamic? How would it handle if there were two queries?
  for (let i = 0; i < queryList.length; i++) {
    if (gqlQuery.includes(queryList[i])) {
      queryName = queryList[i];
    }
  }
  // determine if query accepts arguments
  if (typeDefs.loc) {
    const typeDef : string  = typeDefs.loc.source.body;
    const queryCharStart : number = typeDef.indexOf(queryName);
    const acceptsArg : boolean = typeDef[queryName.length + queryCharStart] === '(';
    // if query accepts arg, check if argument was provided
    const argCharEnd : number = typeDef.indexOf(':', queryCharStart);
    const queryNamePlusArg : string = typeDef.slice(queryCharStart, argCharEnd + 1);
    if (gqlQuery.includes(queryNamePlusArg) /* && acceptsArg */) {
      return 'Provided argument not found. Please enter a valid argument.'
    } else if (gqlQuery.includes(queryName) && acceptsArg) {
      return 'No argument provided. Please provide a valid argument. You may want to consider requiring the argument in your schema.'
    } else {
      return 'Table is empty or other error has occured.'
    }
  } else console.log('typedefs is falsey');
  return "test";
}

// "Please add a valid argument to your query. If arguments are not required, adjust the schema to make the argument(s) non-nullable.";
