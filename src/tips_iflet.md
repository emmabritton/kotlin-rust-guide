# if let

Like in Swift an Option can be unwrapped in an if if there is a value:
```rust
fn some_method(optional_string: Option<String>) {
  if let Some(string_value) = optional_string {
    println!("Does exist: {}", string_value);
  }
}
```
This also works for Result but use Ok instead of Some. If you need to handle both states you should use match as an if let throws away the other value:
```rust
fn some_method(optional_string: Option<String>) {
  match optional_string {
    Some(string_value) => println!("Does exist: {}", string_value),
    None => println!("No content")
  }
}
```