# Default

If you implement a struct where all the fields have all implemented Default then you don’t have to write out every field when making a new instance of the struct:
```rust
#[derive(Default)]
struct Foo { 
	a: i32,
	b: i32,
	c: i32,
	d: String
}

fn main() {
	let foo = Foo::default();
	  
	//You can also supply some of the fields and leave the rest to Default:
	let foo2 = Foo { 
		b: 45,
		d: "Foobar".to_string(), 
		..Foo::default()
	};
	
	//This is also the syntax for copying:
	let foo3 = Foo { 
		a: 10,
		..foo 
	};
}
```