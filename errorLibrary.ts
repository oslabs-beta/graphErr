export const graphErrLibrary = [
        {
            startsWith: "Abstract type",
            fullErrorMessage: "Abstract type \"${returnType.name}\" must resolve to an Object type at runtime for field \"${info.parentType.name}.${info.fieldName}\" with",
            graphQLSpecification: "Internal - 3.6. Objects",
            specificationURL: "https://spec.graphql.org/draft/#sec-Objects"
        },
        {
            startsWith: "Abstract type",
            fullErrorMessage: "Abstract type \"${returnType.name}\" must resolve to an Object type at runtime for field \"${info.parentType.name}.${info.fieldName}\". Either the \"${returnType.name}\" type should provide a \"resolveType\" function or each possible type should provide an \"isTypeOf\" function.",
            graphQLSpecification: "Internal - 3.6. Objects",
            specificationURL: "https://spec.graphql.org/draft/#sec-Objects"
        },
        {
            startsWith: "Abstract type",
            fullErrorMessage: "Abstract type \"${returnType.name}\" was resolved to a non-object type \"${runtimeTypeName}\".",
            graphQLSpecification: "Internal - 3.6. Objects",
            specificationURL: "https://spec.graphql.org/draft/#sec-Objects"
        },
        {
            startsWith: "Abstract type",
            fullErrorMessage: "Abstract type \"${returnType.name}\" was resolved to a type \"${runtimeTypeName}\" that does not exist inside the schema.",
            graphQLSpecification: "Internal - 3.6. Objects",
            specificationURL: "https://spec.graphql.org/draft/#sec-Objects"
        },
        {
            startsWith: "Argument",
            fullErrorMessage: "Argument \"${name}\" has invalid value ${print(valueNode)}.",
            graphQLSpecification: "6.4.1. Coercing Field Arguments",
            specificationURL: "https://spec.graphql.org/draft/#sec-Coercing-Field-Arguments"
        },
        {
            startsWith: "Argument",
            fullErrorMessage: "Argument \"${name}\" of non-null type \"${inspect(argType)} must not be null.\"",
            graphQLSpecification: "6.4.1. Coercing Field Arguments",
            specificationURL: "https://spec.graphql.org/draft/#sec-Coercing-Field-Arguments"
        },
        {
            startsWith: "Argument",
            fullErrorMessage: "Argument \"${name}\" of required type \"${inspect(argType)} was not provided.\"",
            graphQLSpecification: "6.4.1. Coercing Field Arguments",
            specificationURL: "https://spec.graphql.org/draft/#sec-Coercing-Field-Arguments"
        },
        {
            startsWith: "Argument",
            fullErrorMessage: "Argument \"${name}\" of required type \"${inspect(argType)} was provided the variable \"$${variableName}\" which was not provided a runtime value.\"",
            graphQLSpecification: "6.4.1. Coercing Field Arguments",
            specificationURL: "https://spec.graphql.org/draft/#sec-Coercing-Field-Arguments"
        },
        {
            startsWith: "Argument",
            endsWith: "can only be defined once.",
            fullErrorMessage: "Argument \"${parentName}(${argName}:)\" can only be defined once.",
            graphQLSpecification: "5.4.2. Argument Uniqueness",
            specificationURL: "https://spec.graphql.org/draft/#sec-Argument-Uniqueness"
        },
        {
            startsWith: "Boolean cannot represent a non boolean value:",
            fullErrorMessage: "Boolean cannot represent a non boolean value: ${inspect(coercedValue)}",
            graphQLSpecification: "3.5.4. Boolean",
            specificationURL: "https://spec.graphql.org/draft/#sec-Boolean"
        },
        {
            startsWith: "Boolean cannot represent a non boolean value:",
            fullErrorMessage: "Boolean cannot represent a non boolean value: ${inspect(inputValue)}",
            graphQLSpecification: "3.5.4. Boolean",
            specificationURL: "https://spec.graphql.org/draft/#sec-Boolean"
        },
        {
            startsWith: "Boolean cannot represent a non boolean value:",
            fullErrorMessage: "Boolean cannot represent a non boolean value: ${print(valueNode)}",
            graphQLSpecification: "3.5.4. Boolean",
            specificationURL: "https://spec.graphql.org/draft/#sec-Boolean"
        },
        {
            startsWith: "Can only have query, mutation and subscription operations.",
            fullErrorMessage: "Can only have query, mutation and subscription operations.",
            graphQLSpecification: "3.3.1. Root Operation Types",
            specificationURL: "https://spec.graphql.org/draft/#sec-Root-Operation-Types"
        },
        {
            startsWith: "Cannot define a new schema within a schema extension.",
            fullErrorMessage: "Cannot define a new schema within a schema extension.",
            graphQLSpecification: "Missing in spec - 3.3. Schema",
            specificationURL: "https://spec.graphql.org/draft/#sec-Schema"
        },
        {
            startsWith: "Cannot extend",
            fullErrorMessage: "Cannot extend non-${kindStr} type \"${typeName}\".",
            graphQLSpecification: "Missing in spec - 3.4.3. Type Extensions",
            specificationURL: "https://spec.graphql.org/draft/#sec-Type-Extensions"
        },
        {
            startsWith: "Cannot extend",
            fullErrorMessage: "Cannot extend type \"${typeName}\" because it is not defined.",
            graphQLSpecification: "Missing in spec - 3.4.3. Type Extensions",
            specificationURL: "https://spec.graphql.org/draft/#sec-Type-Extensions"
        },
        {
            startsWith: "Cannot query field",
            fullErrorMessage: "Cannot query field \"${fieldName}\" on type \"${type.name}\".",
            graphQLSpecification: "5.3.1. Field Selections",
            specificationURL: "https://spec.graphql.org/draft/#sec-Field-Selections"
        },
        {
            startsWith: "Cannot spread fragment",
            fullErrorMessage: "Cannot spread fragment \"${spreadName}\" within itself",
            graphQLSpecification: "5.5.2.2. Fragment spreads must not form cycles",
            specificationURL: "https://spec.graphql.org/draft/#sec-Fragment-spreads-must-not-form-cycles"
        },
        {
            contains: "is deprecated",
            fullErrorMessage: "Directive \"@${directiveDef.name}\" argument \"${argDef.name}\" is deprecated. ${deprecationReason}",
            graphQLSpecification: "Optional - 4.2. Introspection => Deprecation",
            specificationURL: "https://spec.graphql.org/draft/#sec-Schema-Introspection.Deprecation"
        },
        {
            startsWith: "Directive",
            endsWith: "It cannot be redefined.",
            fullErrorMessage: "Directive \"@${directiveName}\" already exists in the schema. It cannot be redefined.",
            graphQLSpecification: "Missing in spec - 3.13. Directives => Validation",
            specificationURL: "https://spec.graphql.org/draft/#sec-Type-System.Directives.Validation"
        },
        {
            endsWith: "is required, but it was not provided.",
            fullErrorMessage: "Directive \"@${directiveName}\" argument \"${argName}\" of type \"${argType}\" is required, but it was not provided.",
            graphQLSpecification: "5.4.2.1. Required Arguments",
            specificationURL: "https://spec.graphql.org/draft/#sec-Required-Arguments"
        },
        {
            contains: "may not be used on",
            fullErrorMessage: "Directive \"@${name}\" may not be used on ${candidateLocation}.",
            graphQLSpecification: "5.7.2. Directives Are In Valid Locations",
            specificationURL: "https://spec.graphql.org/draft/#sec-Directives-Are-In-Valid-Locations"
        },
        {
            startsWith: "Enum",
            fullErrorMessage: "Enum \"${this.name}\" cannot represent non-enum value: ${valueStr}.",
            graphQLSpecification: "3.9. Enums",
            specificationURL: "https://spec.graphql.org/draft/#sec-Enums"
        },
        {
            startsWith: "Enum",
            fullErrorMessage: "Enum \"${this.name}\" cannot represent non-string value: ${valueStr}.",
            graphQLSpecification: "3.9. Enums",
            specificationURL: "https://spec.graphql.org/draft/#sec-Enums"
        },
        {
            startsWith: "Enum",
            fullErrorMessage: "Enum \"${this.name}\" cannot represent value: ${inspect(outputValue)}",
            graphQLSpecification: "3.9. Enums",
            specificationURL: "https://spec.graphql.org/draft/#sec-Enums"
        },
        {
            startsWith: "Enum value",
            fullErrorMessage: "Enum value \"${typeName}.${valueName}\" already exists in the schema. It cannot also be defined in this type extension.",
            graphQLSpecification: "3.9. Enums => Type Validation",
            specificationURL: "https://spec.graphql.org/draft/#sec-Enums.Type-Validation"
        },
        {
            startsWith: "Enum value",
            fullErrorMessage: "Enum value \"${typeName}.${valueName}\" can only be defined once.",
            graphQLSpecification: "3.9. Enums => Type Validation",
            specificationURL: "https://spec.graphql.org/draft/#sec-Enums.Type-Validation"
        },
        {
            startsWith: "Enum values cannot be named:",
            fullErrorMessage: "Enum values cannot be named: ${name}",
            graphQLSpecification: "B.4. Document Syntax",
            specificationURL: "https://spec.graphql.org/draft/#sec-Document-Syntax"
        },
        {
            startsWith: "Expected Iterable, but did not find one for field",
            fullErrorMessage: "Expected Iterable, but did not find one for field \"${info.parentType.name}.${info.fieldName}\".",
            graphQLSpecification: "Internal - 3.11. List",
            specificationURL: "https://spec.graphql.org/draft/#sec-List"
        },
        {
            startsWith: "Expected name to be a non-empty string.",
            fullErrorMessage: "Expected name to be a non-empty string.",
            graphQLSpecification: "B.3. Lexical Tokens",
            specificationURL: "https://spec.graphql.org/draft/#sec-Appendix-Grammar-Summary.Lexical-Tokens"
        },
        {
            startsWith: "Expected non-nullable type",
            fullErrorMessage: "Expected non-nullable type \"${inspect(type)}\" not to be null.",
            graphQLSpecification: "3.12. Non-Null => Input Coercion",
            specificationURL: "https://spec.graphql.org/draft/#sec-Non-Null.Input-Coercion"
        },
        {
            startsWith: "Expected type",
            endsWith: "to be an object.",
            fullErrorMessage: "Expected type \"${type.name}\" to be an object.",
            graphQLSpecification: "3.10. Input Object => Input Coercion",
            specificationURL: "https://spec.graphql.org/draft/#sec-Non-Null.Input-Coercion"
        },
        {
            startsWith: "Expected type",
            fullErrorMessage: "Expected type \"${type.name}\".",
            graphQLSpecification: "3.5. Scalars => Input Coercion | 3.9. Enums => Input Coercion",
            specificationURL: "https://spec.graphql.org/draft/#sec-Scalars.Input-Coercion"
        },
        {
            startsWith: "Expected type",
            fullErrorMessage: "Expected type \"${type.name}\". ${error.message}",
            graphQLSpecification: "3.5. Scalars => Input Coercion | 3.9. Enums => Input Coercion",
            specificationURL: "https://spec.graphql.org/draft/#sec-Scalars.Input-Coercion"
        },
        {
            startsWith: "Expected value of type",
            fullErrorMessage: "Expected value of type \"${inspect(type)}\", found ${print(node)}.",
            graphQLSpecification: "5.6.1. Values of Correct Type",
            specificationURL: "https://spec.graphql.org/draft/#sec-Values-of-Correct-Type"
        },
        {
            startsWith: "Expected value of type",
            fullErrorMessage: "Expected value of type \"${returnType.name}\" but got: ${inspect(result)}.",
            graphQLSpecification: "Internal"
        },
        {
            startsWith: "Expected value of type",
            fullErrorMessage: "Expected value of type \"${typeStr}\", found ${print(node)};",
            graphQLSpecification: "5.6.1. Values of Correct Type",
            specificationURL: "https://spec.graphql.org/draft/#sec-Values-of-Correct-Type"
        },
        {
            startsWith: "Expected value of type",
            fullErrorMessage: "Expected value of type \"${typeStr}\", found ${print(node)}.",
            graphQLSpecification: "5.6.1. Values of Correct Type",
            specificationURL: "https://spec.graphql.org/draft/#sec-Values-of-Correct-Type"
        },
        {
            startsWith: "Expected value of type",
            fullErrorMessage: "Expected value of type \"${typeStr}\", found ${print(node)}.",
            graphQLSpecification: "5.6.1. Values of Correct Type",
            specificationURL: "https://spec.graphql.org/draft/#sec-Values-of-Correct-Type"
        },
        {
            fullErrorMessage: "Field \"${field.name}\" of required type \"${typeStr}\" was not provided.",
            graphQLSpecification: "3.10. Input Object => Input Coercion",
            specificationURL: "https://spec.graphql.org/draft/#sec-Input-Objects.Input-Coercion"
        },
        {
            endsWith: "is required, but it was not provided.",
            fullErrorMessage: "Field \"${fieldDef.name}\" argument \"${argDef.name}\" of type \"${argTypeStr}\" is required, but it was not provided.",
            graphQLSpecification: "5.4.2.1. Required Arguments",
            specificationURL: "https://spec.graphql.org/draft/#sec-Required-Arguments"
        },
        {
            startsWith: "-",
            contains: "-",
            endsWith: "-",
            fullErrorMessage: "Field \"${fieldName}\" is not defined by type \"${type.name}\".",
            graphQLSpecification: "3.10. Input Object => Input Coercion",
            specificationURL: "https://spec.graphql.org/draft/#sec-Input-Objects.Input-Coercion"
        },
        {
            endsWith: "has no subfields.",
            fullErrorMessage: "Field \"${fieldName}\" must not have a selection since type \"${typeStr}\" has no subfields.",
            graphQLSpecification: "5.3.3. Leaf Field Selections",
            specificationURL: "https://spec.graphql.org/draft/#sec-Leaf-Field-Selections"
        },
        {
            contains: "must have a selection",
            fullErrorMessage: "Field \"${fieldName}\" of type \"${typeStr}\" must have a selection of subfields. Did you mean \"${fieldName} { ... }\"?",
            graphQLSpecification: "5.3.3. Leaf Field Selections",
            specificationURL: "https://spec.graphql.org/draft/#sec-Leaf-Field-Selections"
        },
        {
            startsWith: "-",
            contains: "-",
            endsWith: "-",
            fullErrorMessage: "Field \"${node.name.value}\" is not defined by type \"${parentType.name}\".",
            graphQLSpecification: "5.6.1. Values of Correct Type",
            specificationURL: "https://spec.graphql.org/draft/#sec-Values-of-Correct-Type"
        },
        {
            contains: "is deprecated",
            fullErrorMessage: "Field \"${parentType.name}.${fieldDef.name}\" argument \"${argDef.name}\" is deprecated. ${deprecationReason}",
            graphQLSpecification: "Optional - 4.2. Introspection => Deprecation",
            specificationURL: "https://spec.graphql.org/draft/#sec-Schema-Introspection.Deprecation"
        },
        {
            fullErrorMessage: "Field \"${type.name}.${fieldDef.name}\" of required type \"${typeStr}\" was not provided.",
            graphQLSpecification: "5.6.1. Values of Correct Type",
            specificationURL: "https://spec.graphql.org/draft/#sec-Values-of-Correct-Type"
        },
        {
            startsWith: "Field",
            endsWith: "It cannot also be defined in this type definition.",
            fullErrorMessage: "Field \"${typeName}.${fieldName}\" already exists in the schema. It cannot also be defined in this type extension.",
            graphQLSpecification: "3.6. Objects => Type Validation",
            specificationURL: "https://spec.graphql.org/draft/#sec-Objects.Type-Validation"
        },
        {
            startsWith: "Field",
            endsWith: "can only be defined once.",
            fullErrorMessage: "Field \"${typeName}.${fieldName}\" can only be defined once.",
            graphQLSpecification: "3.6. Objects => Type Validation",
            specificationURL: "https://spec.graphql.org/draft/#sec-Objects.Type-Validation"
        },
        {
            endsWith: "Use different aliases on the fields to fetch both if this was intentional.",
            fullErrorMessage: "Fields \"${responseName}\" conflict because ${reasonMsg}. Use different aliases on the fields to fetch both if this was intentional.",
            graphQLSpecification: "5.3.2. Field Selection Merging",
            specificationURL: "https://spec.graphql.org/draft/#sec-Field-Selection-Merging"
        },
        {
            startsWith: "Float cannot represent non numeric value",
            fullErrorMessage: "Float cannot represent non numeric value: ${inspect(coercedValue)}",
            graphQLSpecification: "3.5.2. Float",
            specificationURL: "https://spec.graphql.org/draft/#sec-Float"
        },
        {
            startsWith: "Float cannot represent non numeric value",
            fullErrorMessage: "Float cannot represent non numeric value: ${inspect(inputValue)}",
            graphQLSpecification: "3.5.2. Float",
            specificationURL: "https://spec.graphql.org/draft/#sec-Float"
        },
        {
            startsWith: "Float cannot represent non numeric value",
            fullErrorMessage: "Float cannot represent non numeric value: ${print(valueNode)}",
            graphQLSpecification: "3.5.2. Float",
            specificationURL: "https://spec.graphql.org/draft/#sec-Float"
        },
        {
            contains: "cannot be spread here",
            fullErrorMessage: "Fragment \"${fragName}\" cannot be spread here as objects of type \"${parentTypeStr}\" can never be of type \"${fragTypeStr}\".",
            graphQLSpecification: "5.5.2.3. Fragment spread is possible",
            specificationURL: "https://spec.graphql.org/draft/#sec-Fragment-spread-is-possible"
        },
        {
            startsWith: "Fragment",
            endsWith: "is never used.",
            fullErrorMessage: "Fragment \"${fragName}\" is never used.",
            graphQLSpecification: "5.5.1.4. Fragments Must Be Used",
            specificationURL: "https://spec.graphql.org/draft/#sec-Fragments-Must-Be-Used"
        },
        {
            startsWith: "Fragment",
            contains: "cannot condition",
            fullErrorMessage: "Fragment \"${node.name.value}\" cannot condition on non composite type \"${typeStr}\".",
            graphQLSpecification: "5.5.1.3. Fragments On Composite Types",
            specificationURL: "https://spec.graphql.org/draft/#sec-Fragments-On-Composite-Types"
        },
        {
            startsWith: "Fragment cannot be spread here as objects of type",
            fullErrorMessage: "Fragment cannot be spread here as objects of type \"${parentTypeStr}\" can never be of type \"${fragTypeStr}\".",
            graphQLSpecification: "5.5.2.3. Fragment spread is possible",
            specificationURL: "https://spec.graphql.org/draft/#sec-Fragment-spread-is-possible"
        },
        {
            startsWith: "Fragment cannot condition on non composite type",
            fullErrorMessage: "Fragment cannot condition on non composite type \"${typeStr}\".",
            graphQLSpecification: "5.5.1.3. Fragments On Composite Types",
            specificationURL: "https://spec.graphql.org/draft/#sec-Fragments-On-Composite-Types"
        },
        {
            startsWith: "GraphQL introspection has been disabled",
            fullErrorMessage: "GraphQL introspection has been disabled, but the requested query contained the field \"${node.name.value}\".",
            graphQLSpecification: "Optional - 4. Introspection",
            specificationURL: "https://spec.graphql.org/draft/#sec-Introspection"
        },
        {
            startsWith: "ID cannot represent",
            fullErrorMessage: "ID cannot represent a non-string and non-integer value: print(valueNode)",
            graphQLSpecification: "3.5.5. ID",
            specificationURL: "https://spec.graphql.org/draft/#sec-ID"
        },
        {
            startsWith: "ID cannot represent",
            fullErrorMessage: "ID cannot represent value: ${inspect(inputValue)}",
            graphQLSpecification: "3.5.5. ID",
            specificationURL: "https://spec.graphql.org/draft/#sec-ID"
        },
        {
            startsWith: "ID cannot represent",
            fullErrorMessage: "ID cannot represent value: ${inspect(outputValue)}",
            graphQLSpecification: "3.5.5. ID",
            specificationURL: "https://spec.graphql.org/draft/#sec-ID"
        },
        {
            startsWith: "Int cannot represent non",
            fullErrorMessage: "Int cannot represent non 32-bit signed integer value:",
            graphQLSpecification: "3.5.1. Int",
            specificationURL: "https://spec.graphql.org/draft/#sec-Int"
        },
        {
            startsWith: "Int cannot represent non",
            fullErrorMessage: "Int cannot represent non 32-bit signed integer value: ${inputValue}",
            graphQLSpecification: "3.5.1. Int",
            specificationURL: "https://spec.graphql.org/draft/#sec-Int"
        },
        {
            startsWith: "Int cannot represent non",
            fullErrorMessage: "Int cannot represent non 32-bit signed integer value: ${valueNode.value}",
            graphQLSpecification: "3.5.1. Int",
            specificationURL: "https://spec.graphql.org/draft/#sec-Int"
        },
        {
            startsWith: "Int cannot represent non",
            fullErrorMessage: "Int cannot represent non-integer value: ${inspect(coercedValue)}",
            graphQLSpecification: "3.5.1. Int",
            specificationURL: "https://spec.graphql.org/draft/#sec-Int"
        },
        {
            startsWith: "Int cannot represent non",
            fullErrorMessage: "Int cannot represent non-integer value: ${inspect(inputValue)}",
            graphQLSpecification: "3.5.1. Int",
            specificationURL: "https://spec.graphql.org/draft/#sec-Int"
        },
        {
            startsWith: "Int cannot represent non",
            fullErrorMessage: "Int cannot represent non-integer value: ${print(valueNode)}",
            graphQLSpecification: "3.5.1. Int",
            specificationURL: "https://spec.graphql.org/draft/#sec-Int"
        },
        {
            startsWith: "Must provide an operation",
            fullErrorMessage: "Must provide an operation.",
            graphQLSpecification: "6.1. Executing Requests",
            specificationURL: "https://spec.graphql.org/draft/#sec-Executing-Requests"
        },
        {
            startsWith: "Must provide only one schema definition",
            fullErrorMessage: "Must provide only one schema definition.",
            graphQLSpecification: "Missing in spec - 3.3. Schema",
            specificationURL: "https://spec.graphql.org/draft/#sec-Schema"
        },
        {
            startsWith: "Must provide operation name if query contains multiple operations",
            fullErrorMessage: "Must provide operation name if query contains multiple operations.",
            graphQLSpecification: "6.1. Executing Requests",
            specificationURL: "https://spec.graphql.org/draft/#sec-Executing-Requests"
        },
        {
            startsWith: "\"Name \"",
            fullErrorMessage: "Name \"${name}\" must not begin with \"__\", which is reserved by GraphQL introspection.",
            graphQLSpecification: "4. Introspection => Reserved Names",
            specificationURL: "https://spec.graphql.org/draft/#sec-Introspection.Reserved-Names"
        },
        {
            startsWith: "Names must",
            fullErrorMessage: "Names must only contain _a-zA-Z0-9 but \"${name}\" does not.",
            graphQLSpecification: "B.3. Lexical Tokens",
            specificationURL: "https://spec.graphql.org/draft/#sec-Appendix-Grammar-Summary.Lexical-Tokens"
        },
        {
            startsWith: "Names must",
            fullErrorMessage: "Names must start with _a-zA-Z but \"${name}\" does not.",
            graphQLSpecification: "B.3. Lexical Tokens",
            specificationURL: "https://spec.graphql.org/draft/#sec-Appendix-Grammar-Summary.Lexical-Tokens"
        },
        {
            startsWith: "Runtime Object type",
            fullErrorMessage: "Runtime Object type \"${runtimeType.name}\" is not a possible type for \"${returnType.name}\".",
            graphQLSpecification: "Internal - 3.6. Objects",
            specificationURL: "https://spec.graphql.org/draft/#sec-Objects"
        },
        {
            startsWith: "Schema does not define the required query root type.",
            fullErrorMessage: "Schema does not define the required query root type.",
            graphQLSpecification: "3.3.1. Root Operation Types",
            specificationURL: "https://spec.graphql.org/draft/#sec-Root-Operation-Types"
        },
        {
            startsWith: "Schema is not configured for mutations.",
            fullErrorMessage: "Schema is not configured for mutations.",
            graphQLSpecification: "3.3.1. Root Operation Types",
            specificationURL: "https://spec.graphql.org/draft/#sec-Root-Operation-Types"
        },
        {
            startsWith: "Schema is not configured for subscriptions.",
            fullErrorMessage: "Schema is not configured for subscriptions.",
            graphQLSpecification: "3.3.1. Root Operation Types",
            specificationURL: "https://spec.graphql.org/draft/#sec-Root-Operation-Types"
        },
        {
            startsWith: "Schema is not configured to execute",
            endsWith: "operation.",
            fullErrorMessage: "Schema is not configured to execute ${operation.operation} operation.",
            graphQLSpecification: "6.2. Executing Operations",
            specificationURL: "https://spec.graphql.org/draft/#sec-Executing-Operations"
        },
        {
            startsWith: "Schema is not configured to execute subscription operation.",
            fullErrorMessage: "Schema is not configured to execute subscription operation.",
            graphQLSpecification: "3.3.1. Root Operation Types",
            specificationURL: "https://spec.graphql.org/draft/#sec-Root-Operation-Types"
        },
        {
            startsWith: "String cannot represent",
            fullErrorMessage: "String cannot represent a non string value: ${inspect(inputValue)}",
            graphQLSpecification: "3.5.3. String",
            specificationURL: "https://spec.graphql.org/draft/#sec-String"
        },
        {
            startsWith: "String cannot represent",
            fullErrorMessage: "String cannot represent a non string value: ${print(valueNode)}",
            graphQLSpecification: "3.5.3. String",
            specificationURL: "https://spec.graphql.org/draft/#sec-String"
        },
        {
            startsWith: "String cannot represent",
            fullErrorMessage: "String cannot represent value: ${inspect(outputValue)}",
            graphQLSpecification: "3.5.3. String",
            specificationURL: "https://spec.graphql.org/draft/#sec-String"
        },
        {
            startsWith: "Subscription",
            fullErrorMessage: "Subscription \"${operationName}\" must not select an introspection top level field.",
            graphQLSpecification: "5.2.3.1. Single root field",
            specificationURL: "https://spec.graphql.org/draft/#sec-Single-root-field"
        },
        {
            startsWith: "Subscription",
            fullErrorMessage: "Subscription \"${operationName}\" must not select an introspection top level field.",
            graphQLSpecification: "5.2.3.1. Single root field",
            specificationURL: "https://spec.graphql.org/draft/#sec-Single-root-field"
        },
        {
            startsWith: "Support for returning GraphQLObjectType from resolveType",
            fullErrorMessage: "Support for returning GraphQLObjectType from resolveType was removed in graphql-js@16.0.0 please return type name instead.",
            graphQLSpecification: "Internal - 3.6. Objects",
            specificationURL: "https://spec.graphql.org/draft/#sec-Objects"
        },
        {
            startsWith: "Syntax Error:",
            fullErrorMessage: "Syntax Error: ${description}",
            graphQLSpecification: "2. Language",
            specificationURL: "https://spec.graphql.org/draft/#sec-Language"
        },
        {
            startsWith: "-",
            endsWith: "definition is not executable.",
            fullErrorMessage: "The ${defName} definition is not executable.",
            graphQLSpecification: "5.1.1. Executable Definitions",
            specificationURL: "https://spec.graphql.org/draft/#sec-Executable-Definitions"
        },
        {
            startsWith: "The directive",
            fullErrorMessage: "The directive \"@${directiveName}\" can only be used once at this location.",
            graphQLSpecification: "5.7.3. Directives Are Unique Per Location",
            specificationURL: "https://spec.graphql.org/draft/#sec-Directives-Are-Unique-Per-Location"
        },
        {
            startsWith: "The enum value",
            fullErrorMessage: "The enum value \"${enumTypeDef.name}.${enumValueDef.name}\" is deprecated. ${deprecationReason}",
            graphQLSpecification: "Optional - 4.2. Introspection => Deprecation",
            specificationURL: "https://spec.graphql.org/draft/#sec-Schema-Introspection.Deprecation"
        },
        {
            startsWith: "The field",
            fullErrorMessage: "The field ${parentType.name}.${fieldDef.name} is deprecated. ${deprecationReason}",
            graphQLSpecification: "Optional - 4.2. Introspection => Deprecation",
            specificationURL: "https://spec.graphql.org/draft/#sec-Schema-Introspection.Deprecation"
        },
        {
            startsWith: "The input field",
            fullErrorMessage: "The input field ${inputObjectDef.name}.${inputFieldDef.name} is deprecated. ${deprecationReason}",
            graphQLSpecification: "Optional - 4.2. Introspection => Deprecation",
            specificationURL: "https://spec.graphql.org/draft/#sec-Schema-Introspection.Deprecation"
        },
        {
            startsWith: "The subscription field",
            fullErrorMessage: "The subscription field \"${fieldName}\" is not defined.",
            graphQLSpecification: "5.3.1. Field Selections",
            specificationURL: "https://spec.graphql.org/draft/#sec-Field-Selections"
        },
        {
            startsWith: "There can be only one",
            endsWith: "type in schema.",
            fullErrorMessage: "There can be only one ${operation} type in schema.",
            graphQLSpecification: "Missing in spec - 3.3.1. Root Operation Types",
            specificationURL: "https://spec.graphql.org/draft/#sec-Root-Operation-Types"
        },
        {
            startsWith: "There can be only one argument named",
            fullErrorMessage: "There can be only one argument named \"${argName}\".",
            graphQLSpecification: "5.4.2. Argument Uniqueness",
            specificationURL: "https://spec.graphql.org/draft/#sec-Argument-Uniqueness"
        },
        {
            startsWith: "There can be only one directive named",
            fullErrorMessage: "There can be only one directive named \"@${directiveName}\".",
            graphQLSpecification: "Missing in spec - 3.13. Directives => Validation",
            specificationURL: "https://spec.graphql.org/draft/#sec-Type-System.Directives.Validation"
        },
        {
            startsWith: "There can be only one fragment named",
            fullErrorMessage: "There can be only one fragment named \"${fragmentName}\".",
            graphQLSpecification: "5.5.1.1. Fragment Name Uniqueness",
            specificationURL: "https://spec.graphql.org/draft/#sec-Fragment-Name-Uniqueness"
        },
        {
            startsWith: "There can be only one input field named",
            fullErrorMessage: "There can be only one input field named \"${fieldName}\".",
            graphQLSpecification: "5.6.3. Input Object Field Uniqueness",
            specificationURL: "https://spec.graphql.org/draft/#sec-Input-Object-Field-Uniqueness"
        },
        {
            startsWith: "There can be only one operation named",
            fullErrorMessage: "There can be only one operation named \"${operationName.value}\".",
            graphQLSpecification: "5.2.1.1. Operation Name Uniqueness",
            specificationURL: "https://spec.graphql.org/draft/#sec-Operation-Name-Uniqueness"
        },
        {
            startsWith: "There can be only one type named",
            fullErrorMessage: "There can be only one type named \"${typeName}\".",
            graphQLSpecification: "Missing in spec - 3.4. Types",
            specificationURL: "https://spec.graphql.org/draft/#sec-Types"
        },
        {
            startsWith: "There can be only one variable named",
            fullErrorMessage: "There can be only one variable named \"$${variableName}\".",
            graphQLSpecification: "5.8.1. Variable Uniqueness",
            specificationURL: "https://spec.graphql.org/draft/#sec-Variable-Uniqueness"
        },
        {
            startsWith: "This anonymous operation must be the only defined operation.",
            fullErrorMessage: "This anonymous operation must be the only defined operation.",
            graphQLSpecification: "5.2.2.1. Lone Anonymous Operation",
            specificationURL: "https://spec.graphql.org/draft/#sec-Lone-Anonymous-Operation"
        },
        {
            startsWith: "Too many",
            fullErrorMessage: "Too many errors processing variables, error limit reached. Execution aborted.",
            graphQLSpecification: "Internal"
        },
        {
            startsWith: "Too many",
            fullErrorMessage: "Too many validation errors, error limit reached. Validation aborted.",
            graphQLSpecification: "Internal"
        },
        {
            startsWith: "Type",
            fullErrorMessage: "Type \"${typeName}\" already exists in the schema. It cannot also be defined in this type definition.",
            graphQLSpecification: "Missing in spec - 3.4. Types",
            specificationURL: "https://spec.graphql.org/draft/#sec-Types"
        },
        {
            startsWith: "Type for",
            fullErrorMessage: "Type for ${operation} already defined in the schema. It cannot be redefined.",
            graphQLSpecification: "Missing in spec - 3.3.1. Root Operation Types",
            specificationURL: "https://spec.graphql.org/draft/#sec-Root-Operation-Types"
        },
        {
            startsWith: "Unknown argument",
            fullErrorMessage: "Unknown argument \"${argName}\" on directive \"@${directiveName}\".",
            graphQLSpecification: "5.4.1. Argument Names",
            specificationURL: "https://spec.graphql.org/draft/#sec-Argument-Names"
        },
        {
            startsWith: "Unknown argument",
            fullErrorMessage: "Unknown argument \"${argName}\" on field \"${parentType.name}.${fieldDef.name}\".",
            graphQLSpecification: "5.4.1. Argument Names",
            specificationURL: "https://spec.graphql.org/draft/#sec-Argument-Names"
        },
        {
            startsWith: "Unknown directive",
            fullErrorMessage: "Unknown directive \"@${name}\".",
            graphQLSpecification: "5.7.1. Directives Are Defined",
            specificationURL: "https://spec.graphql.org/draft/#sec-Directives-Are-Defined"
        },
        {
            startsWith: "Unknown fragment",
            fullErrorMessage: "Unknown fragment \"${fragmentName}\".",
            graphQLSpecification: "5.5.1.2. Fragment Spread Type Existence",
            specificationURL: "https://spec.graphql.org/draft/#sec-Fragment-Spread-Type-Existence"
        },
        {
            startsWith: "Unknown operation named",
            fullErrorMessage: "Unknown operation named \"${operationName}\".",
            graphQLSpecification: "6.1. Executing Requests",
            specificationURL: "https://spec.graphql.org/draft/#sec-Executing-Requests"
        },
        {
            startsWith: "Unknown type",
            fullErrorMessage: "Unknown type \"${typeName}\".",
            graphQLSpecification: "5.5.1.2. Fragment Spread Type Existence",
            specificationURL: "https://spec.graphql.org/draft/#sec-Fragment-Spread-Type-Existence"
        },
        {
            startsWith: "Value",
            contains: "does not exist in",
            endsWith: "enum.",
            fullErrorMessage: "Value \"${inputValue}\" does not exist in \"${this.name}\" enum.",
            graphQLSpecification: "3.9. Enums",
            specificationURL: "https://spec.graphql.org/draft/#sec-Enums"
        },
        {
            startsWith: "Value",
            contains: "does not exist in",
            endsWith: "enum.",
            fullErrorMessage: "Value \"${valueStr}\" does not exist in \"${this.name}\" enum.",
            graphQLSpecification: "3.9. Enums",
            specificationURL: "https://spec.graphql.org/draft/#sec-Enums"
        },
        {
            contains: "cannot be non-input type",
            fullErrorMessage: "Variable \"$${variableName}\" cannot be non-input type \"${typeName}\".",
            graphQLSpecification: "5.8.2. Variables Are Input Types",
            specificationURL: "https://spec.graphql.org/draft/#sec-Variables-Are-Input-Types"
        },
        {
            contains: "is never used in operation",
            fullErrorMessage: "Variable \"$${variableName}\" is never used in operation \"${operation.name.value}\".",
            graphQLSpecification: "5.8.4. All Variables Used",
            specificationURL: "https://spec.graphql.org/draft/#sec-All-Variables-Used"
        },
        {
            endsWith: "which cannot be used as an input type.",
            fullErrorMessage: "Variable \"$${varName}\" expected value of type \"${varTypeStr}\" which cannot be used as an input type.",
            graphQLSpecification: "5.8.2. Variables Are Input Types",
            specificationURL: "https://spec.graphql.org/draft/#sec-Variables-Are-Input-Types"
        },
        {
            contains: "got invalid value",
            fullErrorMessage: "Variable \"$${varName}\" got invalid value ${inspect(invalidValue)}",
            graphQLSpecification: "6.1.2. Coercing Variable Values",
            specificationURL: "https://spec.graphql.org/draft/#sec-Coercing-Variable-Values"
        },
        {
            startsWith: "Variable",
            contains: "is not defined by operation",
            fullErrorMessage: "Variable \"$${varName}\" is not defined by operation \"${operation.name.value}\".",
            graphQLSpecification: "5.8.3. All Variable Uses Defined",
            specificationURL: "https://spec.graphql.org/draft/#sec-All-Variable-Uses-Defined"
        },
        {
            startsWith: "Variable",
            contains: "of non-null type",
            fullErrorMessage: "Variable \"$${varName}\" of non-null type \"${varTypeStr}\" must not be null.",
            graphQLSpecification: "6.1.2. Coercing Variable Values",
            specificationURL: "https://spec.graphql.org/draft/#sec-Coercing-Variable-Values"
        },
        {
            startsWith: "Variable",
            endsWith: "was not provided.",
            fullErrorMessage: "Variable \"$${varName}\" of required type \"${varTypeStr}\" was not provided.",
            graphQLSpecification: "6.1.2. Coercing Variable Values",
            specificationURL: "https://spec.graphql.org/draft/#sec-Coercing-Variable-Values"
        },
        {
            contains: "used in position expecting type",
            fullErrorMessage: "Variable \"$${varName}\" of type \"${varTypeStr}\" used in position expecting type \"${typeStr}\".",
            graphQLSpecification: "5.8.5. All Variable Usages are Allowed",
            specificationURL: "https://spec.graphql.org/draft/#sec-All-Variable-Usages-are-Allowed"
        }
    ]
