# Converting strings

Often when writing a function that takes a piece of text you’ll want to support both String and &str to be more convenient to the caller. This is best achieved by using Into<String> The Into trait tells the compiler to allow any parameter that be coerced as that type to be passed in. Both String and &str already have the Into<String> trait but it can also be implemented for any struct. Into<X> for Y is automatically implemented for any type that implements From<Y> for X which is actually how it’s implemented for Strings and is the recommended approach.

```rust
fn print<S: Into<String>>(value: S) { 
	println!("{}", value.into());
}
```

Unfortunately you can’t use Into<String> as a generic (unless the type supports it), for example with Option<Into<String>> as Option would need to have special support to know how to coerce the values.
