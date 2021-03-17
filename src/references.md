# References

All variables can be passed as a reference by prefixing with a `&`, for example:
```rust
fn main() {
	let foo = 10; 
	print(foo); 
	print_ref(&foo);
}

fn print(value: i32) { 
	//Passed by value so no need to deference
	example(value);
}

fn print_ref(value: &i32) {
	//Dereferenced with *
	example(*value); 
}

fn example(value: i32) {
	//do something with value
}
```

Dereferencing a variable moves the value, so the value must implement `Copy`. See [Deriving and implementing](./classes_deriving.md)

For clarity:

| Symbols | Meaning |
| - | - |
| \<No symbols> | Value, immutable |
| mut | Value, mutable |
| & | Reference, immutable |
| &mut | Reference, mutable |
| * | Dereferenced |
 