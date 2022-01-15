# Mutability


Because of the limitations imposed by the JVM in Kotlin variables are mutable or immutable sometimes based on type and sometimes by declaration. In Rust (and some other languages such as Swift) mutability is controlled via declaration:
```rust
fn main() { 
	let foo: i32 = 1;     //immutable
	let mut bar: i32 = 2; //mutable
}
```

Immutable variables can't be referenced as mutable, so the following will not compile:
```rust,ignore,does_not_compile
fn main() {
	let foo: i32 = 1; 

	//This is invalid as the variable is immutable and so all 
	//references must be immutable as well
	change_ref(&mut foo); 

	//This is fine as a copy of the value is passed into the 
	//method and only the copy is mutable
	change_val(foo); 
}

fn change_ref(value: &mut i32) {
	*value += 1; 
}

fn change_val(value: mut i32) {
	value += 1;
}
```

Note that unlike in Kotlin lists (and any other objects and their properties) in Rust can't be changed if the variable isn't marked as mutable, so the following will not compile:
```rust,ignore,does_not_compile
fn main() {
	let list = vec![1, 2, 3];

	list.push(4);
}
```


See also
[Interior mutability](./tips_intmut.md)