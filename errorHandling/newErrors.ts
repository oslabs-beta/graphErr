import { typeDefs, Resolvers } from '../typedefs.ts';

export const newErrors = (gqlQuery : string, resolvers: Resolvers) : string => {
  // list of queries
  const queryList: string[] = Object.keys(resolvers);
  let queryName = '';
  // loop through queryList. For each element, check if given element exists in gqlQuery
  for (let i = 0; i < queryList.length; i++) {
    if (gqlQuery.includes(queryList[i])) {
      queryName = queryList[i];
    }
  }

  // determine if query accepts arguments
  if (typeDefs.loc) {
    const typeDef : string  = typeDefs.loc.source.body;
    const queryCharStart : number = typeDef.indexOf(queryName);
    // const acceptsArg : boolean = typeDef[queryName.length + queryCharStart] === '(';
    // if query accepts arg, check if argument was provided
    const argCharEnd : number = typeDef.indexOf(':', queryCharStart);
    const queryNamePlusArg : string = typeDef.slice(queryCharStart, argCharEnd + 1);
    if (gqlQuery.includes(queryNamePlusArg)) {
      return 'Provided argument not found. Please enter a valid argument.'
    } else {
      return 'No argument provided. Please provide a valid argument. You may want to consider requiring the argument in your schema.'
    }
    // gqlQuery
  } else return 'Typedefs issue';

}
