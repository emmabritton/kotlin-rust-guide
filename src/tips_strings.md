# Converting strings

Often when writing a function that takes a piece of text you’ll want to support both `String` and `&str` to be more convenient to the caller. This is best achieved by using `&str` or `Into<String>`. 

`String` can be converted to `&str` like this:
```rust
let text = String::new();
print(&text);
``` 

The Into trait tells the compiler to allow any parameter that be coerced as that type to be passed in. `&str` already has the `Into<String>` trait but it can also be implemented for any struct. `Into<X>` for Y is automatically implemented for any type that implements `From<Y>` for X which is actually how it’s implemented for Strings and is the recommended approach. 

```rust
fn print(value: &str) { 
	println!("{}", value;
}

fn print<S: Into<String>>(value: S) { 
	println!("{}", value.into());
}
```
