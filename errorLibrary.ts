export const graphErrLibrary = [
    {
      standardError: "Abstract type",
      fullErrorMessage: "Abstract type \"${returnType.name}\" must resolve to an Object type at runtime for field \"${info.parentType.name}.${info.fieldName}\" with",
      graphQLSpecification: "Internal - 3.6. Objects",
      specificationURL: "https://spec.graphql.org/draft/#sec-Objects"
    },
    {
        standardError: "Abstract type",
        fullErrorMessage: "Abstract type \"${returnType.name}\" must resolve to an Object type at runtime for field \"${info.parentType.name}.${info.fieldName}\". Either the \"${returnType.name}\" type should provide a \"resolveType\" function or each possible type should provide an \"isTypeOf\" function.",
        graphQLSpecification: "Internal - 3.6. Objects",
        specificationURL: "https://spec.graphql.org/draft/#sec-Objects"
    },
    {
        standardError: "Abstract type",
        fullErrorMessage: "Abstract type \"${returnType.name}\" was resolved to a non-object type \"${runtimeTypeName}\".",
        graphQLSpecification: "Internal - 3.6. Objects",
        specificationURL: "https://spec.graphql.org/draft/#sec-Objects"
    },
    {
        standardError: "Abstract type",
        fullErrorMessage: "Abstract type \"${returnType.name}\" was resolved to a type \"${runtimeTypeName}\" that does not exist inside the schema.",
        graphQLSpecification: "Internal - 3.6. Objects",
        specificationURL: "https://spec.graphql.org/draft/#sec-Objects"
    },
    {
        standardError: "Argument",
        fullErrorMessage: "Argument \"${name}\" has invalid value ${print(valueNode)}.",
        graphQLSpecification: "6.4.1. Coercing Field Arguments",
        specificationURL: "https://spec.graphql.org/draft/#sec-Coercing-Field-Arguments"
    },
    {
        standardError: "Argument",
        fullErrorMessage: "Argument \"${name}\" of non-null type \"${inspect(argType)} must not be null.\"",
        graphQLSpecification: "6.4.1. Coercing Field Arguments",
        specificationURL: "https://spec.graphql.org/draft/#sec-Coercing-Field-Arguments"
    },
    {
        standardError: "Argument",
        fullErrorMessage: "Argument \"${name}\" of required type \"${inspect(argType)} was not provided.\"",
        graphQLSpecification: "6.4.1. Coercing Field Arguments",
        specificationURL: "https://spec.graphql.org/draft/#sec-Coercing-Field-Arguments"
    },
    {
        standardError: "Argument",
        fullErrorMessage: "Argument \"${name}\" of required type \"${inspect(argType)} was provided the variable \"$${variableName}\" which was not provided a runtime value.\"",
        graphQLSpecification: "6.4.1. Coercing Field Arguments",
        specificationURL: "https://spec.graphql.org/draft/#sec-Coercing-Field-Arguments"
    },
    {
        standardError: "Boolean cannot represent a non boolean value:",
        fullErrorMessage: "Boolean cannot represent a non boolean value: ${inspect(coercedValue)}",
        graphQLSpecification: "3.5.4. Boolean",
        specificationURL: "https://spec.graphql.org/draft/#sec-Boolean"
    },
    {
        standardError: "Boolean cannot represent a non boolean value:",
        fullErrorMessage: "Boolean cannot represent a non boolean value: ${inspect(inputValue)}",
        graphQLSpecification: "3.5.4. Boolean",
        specificationURL: "https://spec.graphql.org/draft/#sec-Boolean"
    },
    {
        standardError: "Boolean cannot represent a non boolean value:",
        fullErrorMessage: "Boolean cannot represent a non boolean value: ${print(valueNode)}",
        graphQLSpecification: "3.5.4. Boolean",
        specificationURL: "https://spec.graphql.org/draft/#sec-Boolean"
    },
    {
        standardError: "Can only have query, mutation and subscription operations.",
        fullErrorMessage: "Can only have query, mutation and subscription operations.",
        graphQLSpecification: "3.3.1. Root Operation Types",
        specificationURL: "https://spec.graphql.org/draft/#sec-Root-Operation-Types"
    },
    {
        standardError: "Cannot define a new schema within a schema extension.",
        fullErrorMessage: "Cannot define a new schema within a schema extension.",
        graphQLSpecification: "Missing in spec - 3.3. Schema",
        specificationURL: "https://spec.graphql.org/draft/#sec-Schema"
    },
    {
        standardError: "Cannot extend",
        fullErrorMessage: "Cannot extend non-${kindStr} type \"${typeName}\".",
        graphQLSpecification: "Missing in spec - 3.4.3. Type Extensions",
        specificationURL: "https://spec.graphql.org/draft/#sec-Type-Extensions"
    },
    {
        standardError: "Cannot extend",
        fullErrorMessage: "Cannot extend type \"${typeName}\" because it is not defined.",
        graphQLSpecification: "Missing in spec - 3.4.3. Type Extensions",
        specificationURL: "https://spec.graphql.org/draft/#sec-Type-Extensions"
    },
    {
        standardError: "Cannot query field",
        fullErrorMessage: "Cannot query field \"${fieldName}\" on type \"${type.name}\".",
        graphQLSpecification: "5.3.1. Field Selections",
        specificationURL: "https://spec.graphql.org/draft/#sec-Field-Selections"
    },
    {
        standardError: "Cannot spread fragment",
        fullErrorMessage: "Cannot spread fragment \"${spreadName}\" within itself",
        graphQLSpecification: "5.5.2.2. Fragment spreads must not form cycles",
        specificationURL: "https://spec.graphql.org/draft/#sec-Fragment-spreads-must-not-form-cycles"
    },
    {
        standardError: "Enum values cannot be named:",
        fullErrorMessage: "Enum values cannot be named: ${name}",
        graphQLSpecification: "B.4. Document Syntax",
        specificationURL: "https://spec.graphql.org/draft/#sec-Document-Syntax"
    },
    {
        standardError: "Enum value",
        fullErrorMessage: "Enum value \"${typeName}.${valueName}\" already exists in the schema. It cannot also be defined in this type extension.",
        graphQLSpecification: "3.9. Enums => Type Validation",
        specificationURL: "https://spec.graphql.org/draft/#sec-Enums.Type-Validation"
    },
    {
        standardError: "Enum value",
        fullErrorMessage: "Enum value \"${typeName}.${valueName}\" can only be defined once.",
        graphQLSpecification: "3.9. Enums => Type Validation",
        specificationURL: "https://spec.graphql.org/draft/#sec-Enums.Type-Validation"
    },
    {
        standardError: "Enum",
        fullErrorMessage: "Enum \"${this.name}\" cannot represent non-enum value: ${valueStr}.",
        graphQLSpecification: "3.9. Enums",
        specificationURL: "https://spec.graphql.org/draft/#sec-Enums"
    },
    {
        standardError: "Enum",
        fullErrorMessage: "Enum \"${this.name}\" cannot represent non-string value: ${valueStr}.",
        graphQLSpecification: "3.9. Enums",
        specificationURL: "https://spec.graphql.org/draft/#sec-Enums"
    },
    {
        standardError: "Enum",
        fullErrorMessage: "Enum \"${this.name}\" cannot represent value: ${inspect(outputValue)}",
        graphQLSpecification: "3.9. Enums",
        specificationURL: "https://spec.graphql.org/draft/#sec-Enums"
    },
    {
        standardError: "Expected Iterable, but did not find one for field",
        fullErrorMessage: "Expected Iterable, but did not find one for field \"${info.parentType.name}.${info.fieldName}\".",
        graphQLSpecification: "Internal - 3.11. List",
        specificationURL: "https://spec.graphql.org/draft/#sec-List"
    },
    {
        standardError: "Expected name to be a non-empty string.",
        fullErrorMessage: "Expected name to be a non-empty string.",
        graphQLSpecification: "B.3. Lexical Tokens",
        specificationURL: "https://spec.graphql.org/draft/#sec-Appendix-Grammar-Summary.Lexical-Tokens"
    },
    {
        standardError: "Expected non-nullable type",
        fullErrorMessage: "Expected non-nullable type \"${inspect(type)}\" not to be null.",
        graphQLSpecification: "3.12. Non-Null => Input Coercion",
        specificationURL: "https://spec.graphql.org/draft/#sec-Non-Null.Input-Coercion"
    },
    {
        standardError: "Expected type",
        fullErrorMessage: "Expected type \"${type.name}\".",
        graphQLSpecification: "3.5. Scalars => Input Coercion | 3.9. Enums => Input Coercion",
        specificationURL: "https://spec.graphql.org/draft/#sec-Scalars.Input-Coercion"
    },
    {
        standardError: "Expected type",
        fullErrorMessage: "Expected type \"${type.name}\". ${error.message}",
        graphQLSpecification: "3.5. Scalars => Input Coercion | 3.9. Enums => Input Coercion",
        specificationURL: "https://spec.graphql.org/draft/#sec-Scalars.Input-Coercion"
    },
    {
        standardError: "Expected value of type",
        fullErrorMessage: "Expected value of type \"${inspect(type)}\", found ${print(node)}.",
        graphQLSpecification: "5.6.1. Values of Correct Type",
        specificationURL: "https://spec.graphql.org/draft/#sec-Values-of-Correct-Type"
    },
    {
        standardError: "Expected value of type",
        fullErrorMessage: "Expected value of type \"${returnType.name}\" but got: ${inspect(result)}.",
        graphQLSpecification: "Internal"
    },
    {
        standardError: "Expected value of type",
        fullErrorMessage: "Expected value of type \"${typeStr}\", found ${print(node)};",
        graphQLSpecification: "5.6.1. Values of Correct Type",
        specificationURL: "https://spec.graphql.org/draft/#sec-Values-of-Correct-Type"
    },
    {
        standardError: "Expected value of type",
        fullErrorMessage: "Expected value of type \"${typeStr}\", found ${print(node)}.",
        graphQLSpecification: "5.6.1. Values of Correct Type",
        specificationURL: "https://spec.graphql.org/draft/#sec-Values-of-Correct-Type"
    },
    {
        standardError: "Expected value of type",
        fullErrorMessage: "Expected value of type \"${typeStr}\", found ${print(node)}.",
        graphQLSpecification: "5.6.1. Values of Correct Type",
        specificationURL: "https://spec.graphql.org/draft/#sec-Values-of-Correct-Type"
    },
    {
        standardError: "Float cannot represent non numeric value",
        fullErrorMessage: "Float cannot represent non numeric value: ${inspect(coercedValue)}",
        graphQLSpecification: "3.5.2. Float",
        specificationURL: "https://spec.graphql.org/draft/#sec-Float"
    },
    {
        standardError: "Float cannot represent non numeric value",
        fullErrorMessage: "Float cannot represent non numeric value: ${inspect(inputValue)}",
        graphQLSpecification: "3.5.2. Float",
        specificationURL: "https://spec.graphql.org/draft/#sec-Float"
    },
    {
        standardError: "Float cannot represent non numeric value",
        fullErrorMessage: "Float cannot represent non numeric value: ${print(valueNode)}",
        graphQLSpecification: "3.5.2. Float",
        specificationURL: "https://spec.graphql.org/draft/#sec-Float"
    },
    {
        standardError: "Fragment cannot be spread here as objects of type",
        fullErrorMessage: "Fragment cannot be spread here as objects of type \"${parentTypeStr}\" can never be of type \"${fragTypeStr}\".",
        graphQLSpecification: "5.5.2.3. Fragment spread is possible",
        specificationURL: "https://spec.graphql.org/draft/#sec-Fragment-spread-is-possible"
    },
    {
        standardError: "Fragment cannot condition on non composite type",
        fullErrorMessage: "Fragment cannot condition on non composite type \"${typeStr}\".",
        graphQLSpecification: "5.5.1.3. Fragments On Composite Types",
        specificationURL: "https://spec.graphql.org/draft/#sec-Fragments-On-Composite-Types"
    },
    {
        standardError: "GraphQL introspection has been disabled",
        fullErrorMessage: "GraphQL introspection has been disabled, but the requested query contained the field \"${node.name.value}\".",
        graphQLSpecification: "Optional - 4. Introspection",
        specificationURL: "https://spec.graphql.org/draft/#sec-Introspection"
    },
    {
        standardError: "ID cannot represent",
        fullErrorMessage: "ID cannot represent a non-string and non-integer value: print(valueNode)",
        graphQLSpecification: "3.5.5. ID",
        specificationURL: "https://spec.graphql.org/draft/#sec-ID"
    },
    {
        standardError: "ID cannot represent",
        fullErrorMessage: "ID cannot represent value: ${inspect(inputValue)}",
        graphQLSpecification: "3.5.5. ID",
        specificationURL: "https://spec.graphql.org/draft/#sec-ID"
    },
    {
        standardError: "ID cannot represent",
        fullErrorMessage: "ID cannot represent value: ${inspect(outputValue)}",
        graphQLSpecification: "3.5.5. ID",
        specificationURL: "https://spec.graphql.org/draft/#sec-ID"
    },
    {
        standardError: "Int cannot represent non",
        fullErrorMessage: "Int cannot represent non 32-bit signed integer value:",
        graphQLSpecification: "3.5.1. Int",
        specificationURL: "https://spec.graphql.org/draft/#sec-Int"
    },
    {
        standardError: "Int cannot represent non",
        fullErrorMessage: "Int cannot represent non 32-bit signed integer value: ${inputValue}",
        graphQLSpecification: "3.5.1. Int",
        specificationURL: "https://spec.graphql.org/draft/#sec-Int"
    },
    {
        standardError: "Int cannot represent non",
        fullErrorMessage: "Int cannot represent non 32-bit signed integer value: ${valueNode.value}",
        graphQLSpecification: "3.5.1. Int",
        specificationURL: "https://spec.graphql.org/draft/#sec-Int"
    },
    {
        standardError: "Int cannot represent non",
        fullErrorMessage: "Int cannot represent non-integer value: ${inspect(coercedValue)}",
        graphQLSpecification: "3.5.1. Int",
        specificationURL: "https://spec.graphql.org/draft/#sec-Int"
    },
    {
        standardError: "Int cannot represent non",
        fullErrorMessage: "Int cannot represent non-integer value: ${inspect(inputValue)}",
        graphQLSpecification: "3.5.1. Int",
        specificationURL: "https://spec.graphql.org/draft/#sec-Int"
    },
    {
        standardError: "Int cannot represent non",
        fullErrorMessage: "Int cannot represent non-integer value: ${print(valueNode)}",
        graphQLSpecification: "3.5.1. Int",
        specificationURL: "https://spec.graphql.org/draft/#sec-Int"
    },
    {
        standardError: "Must provide an operation",
        fullErrorMessage: "Must provide an operation.",
        graphQLSpecification: "6.1. Executing Requests",
        specificationURL: "https://spec.graphql.org/draft/#sec-Executing-Requests"
    },
    {
        standardError: "Must provide only one schema definition",
        fullErrorMessage: "Must provide only one schema definition.",
        graphQLSpecification: "Missing in spec - 3.3. Schema",
        specificationURL: "https://spec.graphql.org/draft/#sec-Schema"
    },
    {
        standardError: "Must provide operation name if query contains multiple operations",
        fullErrorMessage: "Must provide operation name if query contains multiple operations.",
        graphQLSpecification: "6.1. Executing Requests",
        specificationURL: "https://spec.graphql.org/draft/#sec-Executing-Requests"
    },
    {
        standardError: "Names must",
        fullErrorMessage: "Names must only contain _a-zA-Z0-9 but \"${name}\" does not.",
        graphQLSpecification: "B.3. Lexical Tokens",
        specificationURL: "https://spec.graphql.org/draft/#sec-Appendix-Grammar-Summary.Lexical-Tokens"
    },
    {
        standardError: "Names must",
        fullErrorMessage: "Names must start with _a-zA-Z but \"${name}\" does not.",
        graphQLSpecification: "B.3. Lexical Tokens",
        specificationURL: "https://spec.graphql.org/draft/#sec-Appendix-Grammar-Summary.Lexical-Tokens"
    },
    {
        standardError: "Name",
        fullErrorMessage: "Name \"${name}\" must not begin with \"__\", which is reserved by GraphQL introspection.",
        graphQLSpecification: "4. Introspection => Reserved Names",
        specificationURL: "https://spec.graphql.org/draft/#sec-Introspection.Reserved-Names"
    },
    {
        standardError: "Runtime Object type",
        fullErrorMessage: "Runtime Object type \"${runtimeType.name}\" is not a possible type for \"${returnType.name}\".",
        graphQLSpecification: "Internal - 3.6. Objects",
        specificationURL: "https://spec.graphql.org/draft/#sec-Objects"
    },
    {
        standardError: "Schema does not define the required query root type.",
        fullErrorMessage: "Schema does not define the required query root type.",
        graphQLSpecification: "3.3.1. Root Operation Types",
        specificationURL: "https://spec.graphql.org/draft/#sec-Root-Operation-Types"
    },
    {
        standardError: "Schema is not configured for mutations.",
        fullErrorMessage: "Schema is not configured for mutations.",
        graphQLSpecification: "3.3.1. Root Operation Types",
        specificationURL: "https://spec.graphql.org/draft/#sec-Root-Operation-Types"
    },
    {
        standardError: "Schema is not configured for subscriptions.",
        fullErrorMessage: "Schema is not configured for subscriptions.",
        graphQLSpecification: "3.3.1. Root Operation Types",
        specificationURL: "https://spec.graphql.org/draft/#sec-Root-Operation-Types"
    },
    {
        standardError: "Schema is not configured to execute subscription operation.",
        fullErrorMessage: "Schema is not configured to execute subscription operation.",
        graphQLSpecification: "3.3.1. Root Operation Types",
        specificationURL: "https://spec.graphql.org/draft/#sec-Root-Operation-Types"
    },
    {
        standardError: "String cannot represent",
        fullErrorMessage: "String cannot represent a non string value: ${inspect(inputValue)}",
        graphQLSpecification: "3.5.3. String",
        specificationURL: "https://spec.graphql.org/draft/#sec-String"
    },
    {
        standardError: "String cannot represent",
        fullErrorMessage: "String cannot represent a non string value: ${print(valueNode)}",
        graphQLSpecification: "3.5.3. String",
        specificationURL: "https://spec.graphql.org/draft/#sec-String"
    },
    {
        standardError: "String cannot represent",
        fullErrorMessage: "String cannot represent value: ${inspect(outputValue)}",
        graphQLSpecification: "3.5.3. String",
        specificationURL: "https://spec.graphql.org/draft/#sec-String"
    },
    {
        standardError: "Subscription",
        fullErrorMessage: "Subscription \"${operationName}\" must not select an introspection top level field.",
        graphQLSpecification: "5.2.3.1. Single root field",
        specificationURL: "https://spec.graphql.org/draft/#sec-Single-root-field"
    },
    {
      standardError: "Subscription",
      fullErrorMessage: "Subscription \"${operationName}\" must not select an introspection top level field.",
      graphQLSpecification: "5.2.3.1. Single root field",
      specificationURL: "https://spec.graphql.org/draft/#sec-Single-root-field"
  },
    {
      standardError: "Support for returning GraphQLObjectType from resolveType",
      fullErrorMessage: "Support for returning GraphQLObjectType from resolveType was removed in graphql-js@16.0.0 please return type name instead.",
      graphQLSpecification: "Internal - 3.6. Objects",
      specificationURL: "https://spec.graphql.org/draft/#sec-Objects"
    },
    {
      standardError: "Syntax Error:",
      fullErrorMessage: "Syntax Error: ${description}",
      graphQLSpecification: "2. Language",
      specificationURL: "https://spec.graphql.org/draft/#sec-Language"
    },
    {
      standardError: "The directive",
      fullErrorMessage: "The directive \"@${directiveName}\" can only be used once at this location.",
      graphQLSpecification: "5.7.3. Directives Are Unique Per Location",
      specificationURL: "https://spec.graphql.org/draft/#sec-Directives-Are-Unique-Per-Location"
    },
    {
      standardError: "The enum value",
      fullErrorMessage: "The enum value \"${enumTypeDef.name}.${enumValueDef.name}\" is deprecated. ${deprecationReason}",
      graphQLSpecification: "Optional - 4.2. Introspection => Deprecation",
      specificationURL: "https://spec.graphql.org/draft/#sec-Schema-Introspection.Deprecation"
    },
    {
      standardError: "The field",
      fullErrorMessage: "The field ${parentType.name}.${fieldDef.name} is deprecated. ${deprecationReason}",
      graphQLSpecification: "Optional - 4.2. Introspection => Deprecation",
      specificationURL: "https://spec.graphql.org/draft/#sec-Schema-Introspection.Deprecation"
    },
    {
      standardError: "The input field",
      fullErrorMessage: "The input field ${inputObjectDef.name}.${inputFieldDef.name} is deprecated. ${deprecationReason}",
      graphQLSpecification: "Optional - 4.2. Introspection => Deprecation",
      specificationURL: "https://spec.graphql.org/draft/#sec-Schema-Introspection.Deprecation"
    },
    {
      standardError: "The subscription field",
      fullErrorMessage: "The subscription field \"${fieldName}\" is not defined.",
      graphQLSpecification: "5.3.1. Field Selections",
      specificationURL: "https://spec.graphql.org/draft/#sec-Field-Selections"
    },
    {
      standardError: "This anonymous operation must be the only defined operation.",
      fullErrorMessage: "This anonymous operation must be the only defined operation.",
      graphQLSpecification: "5.2.2.1. Lone Anonymous Operation",
      specificationURL: "https://spec.graphql.org/draft/#sec-Lone-Anonymous-Operation"
    },
    {
      standardError: "Too many",
      fullErrorMessage: "Too many errors processing variables, error limit reached. Execution aborted.",
      graphQLSpecification: "Internal"
    },
    {
      standardError: "Too many",
      fullErrorMessage: "Too many validation errors, error limit reached. Validation aborted.",
      graphQLSpecification: "Internal"
    },
    {
      standardError: "Type",
      fullErrorMessage: "Type \"${typeName}\" already exists in the schema. It cannot also be defined in this type definition.",
      graphQLSpecification: "Missing in spec - 3.4. Types",
      specificationURL: "https://spec.graphql.org/draft/#sec-Types"
    },
    {
      standardError: "Type for",
      fullErrorMessage: "Type for ${operation} already defined in the schema. It cannot be redefined.",
      graphQLSpecification: "Missing in spec - 3.3.1. Root Operation Types",
      specificationURL: "https://spec.graphql.org/draft/#sec-Root-Operation-Types"
    },
    {
      standardError: "Unknown argument",
      fullErrorMessage: "Unknown argument \"${argName}\" on directive \"@${directiveName}\".",
      graphQLSpecification: "5.4.1. Argument Names",
      specificationURL: "https://spec.graphql.org/draft/#sec-Argument-Names"
    },
    {
      standardError: "Unknown argument",
      fullErrorMessage: "Unknown argument \"${argName}\" on field \"${parentType.name}.${fieldDef.name}\".",
      graphQLSpecification: "5.4.1. Argument Names",
      specificationURL: "https://spec.graphql.org/draft/#sec-Argument-Names"
    },
    {
      standardError: "Unknown directive",
      fullErrorMessage: "Unknown directive \"@${name}\".",
      graphQLSpecification: "5.7.1. Directives Are Defined",
      specificationURL: "https://spec.graphql.org/draft/#sec-Directives-Are-Defined"
    },
    {
      standardError: "Unknown fragment",
      fullErrorMessage: "Unknown fragment \"${fragmentName}\".",
      graphQLSpecification: "5.5.1.2. Fragment Spread Type Existence",
      specificationURL: "https://spec.graphql.org/draft/#sec-Fragment-Spread-Type-Existence"
    },
    {
      standardError: "Unknown operation named",
      fullErrorMessage: "Unknown operation named \"${operationName}\".",
      graphQLSpecification: "6.1. Executing Requests",
      specificationURL: "https://spec.graphql.org/draft/#sec-Executing-Requests"
    },
    {
      standardError: "Unknown type",
      fullErrorMessage: "Unknown type \"${typeName}\".",
      graphQLSpecification: "5.5.1.2. Fragment Spread Type Existence",
      specificationURL: "https://spec.graphql.org/draft/#sec-Fragment-Spread-Type-Existence"
    },
    {
      standardError: "Value",
      fullErrorMessage: "Value \"${inputValue}\" does not exist in \"${this.name}\" enum.",
      graphQLSpecification: "3.9. Enums",
      specificationURL: "https://spec.graphql.org/draft/#sec-Enums"
    },
    {
      standardError: "Value",
      fullErrorMessage: "Value \"${valueStr}\" does not exist in \"${this.name}\" enum.",
      graphQLSpecification: "3.9. Enums",
      specificationURL: "https://spec.graphql.org/draft/#sec-Enums"
    }
  ]