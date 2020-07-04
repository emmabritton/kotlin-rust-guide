# Syntax differences

In Rust...
* lines have to end with a semicolon, except if it's an implicit return value (like in Kotlin).
* methods parameters can not be variadic, named or have default values.
* method overloading is not supported.
* the naming scheme is `snake_case` for methods, variables and files; and `CamelCase` for Traits, Structs, Impls and Enums.
* annotations are written like `#[example]` instead of `@Example`