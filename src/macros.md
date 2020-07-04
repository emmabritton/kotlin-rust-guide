# Macros

Rust uses macros a lot, this book doesn't cover them as they are beyond it's scope. Macro are invoked by the macro name then an exclamation mark, i.e. `example!`.

Macros can used like functions `example!()` but anything can follow the exclamation mark as macros are very powerful, for example:

```rust,ignore
println!("Hello World");

let list = vec![1, 2, 3];

let foo = dsl! {
	init_with_default
	config = bar
}

//At compile time this will invoke the example macro with Foo as the parameter
#[derive(example)]
struct Foo {

}
```

The annotation macros will generate code for Structs like AutoValue does for classes.

Macros can generate Rust code at compile time or run and return a result at runtime like a method. 

Most programs don't need their own macros but will use ones from std or crates.