import { typeDefs } from '../typedefs.ts';

export const newErrors = (gqlQuery : any, resolvers: any) : string => {
  // list of queries
  // console.log(resolvers);
  const queryList = Object.keys(resolvers);
  let queryName = '';
  // loop through queryList. For each element, check if given element exists in gqlQuery
  for (let i = 0; i < queryList.length; i++) {
    if (gqlQuery.includes(queryList[i])) {
      queryName = queryList[i];
    }
  }

  // determine if query accepts arguments
  if (typeDefs.loc) {
    // console.log(typeDefs)
    const typeDef : string  = typeDefs.loc.source.body;
    // console.log(typeDef);
    const queryCharStart : number = typeDef.indexOf(queryName);
    const acceptsArg : boolean = typeDef[queryName.length + queryCharStart] === '(';
    // if query accepts arg, check if argument was provided
    const argCharEnd : number = typeDef.indexOf(':', queryCharStart);
    const queryNamePlusArg : string = typeDef.slice(queryCharStart, argCharEnd + 1);
    // console.log(queryNamePlusArg);
    // console.log("Query Plus Arg", queryNamePlusArg);
    if (gqlQuery.includes(queryNamePlusArg)) {
      return 'Provided argument not found. Please enter a valid argument.'
    } else {
      return 'No argument provided. Please provide a valid argument. You may want to consider requiring the argument in your schema.'
    }
    // gqlQuery
  } else console.log('typedefs is falsey');


  // console.log(gqlQuery);
  // console.log(queryName);
  // console.log(gqlQuery.indexOf(queryName));
  // console.log(gqlQuery[queryName.length + gqlQuery.indexOf(queryName)]);

  return "test";
}

// "Please add a valid argument to your query. If arguments are not required, adjust the schema to make the argument(s) non-nullable.";
