# Testing

The standard in Rust is to have the tests in a module inside the module being tested, the test module needs to be annotated as do all the tests:

```rust
//foo.rs 

fn add(value1: i32, value2: i32) -> i32 {
  value1 + value2
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_all() {
        assert_eq!(2, add(1, 1));
    }
}
```