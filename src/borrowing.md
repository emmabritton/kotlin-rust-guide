# Borrowing and Ownership

In Kotlin a variable exists, and is available, while in it’s scope. A global static variable is always available but a variable created in a method (unless returned) only exists during that instance of the methods execution. Rust is basically the same and generally you’ll be able to write code without having to think about the borrowing system, but sometimes you will have to deal with it.

This will not compile as bar has taken ownership of the data in foo and so foo can no longer be used:
```rust,does_not_compile,ignore
let foo = String::from("Hello"); 
let bar = foo;
println!("{}", foo);
```

This will compile however as numbers have Copy implemented for them and so num2 automatically makes a copy of num1s data:
```rust
let num1 = 54;
let num2 = num1; 
println!("{}", num1);
```

but this can be replicated for the string example by doing:
```rust
let foo = String::from("Hello"); 
let bar = foo.clone();
println!("{}", foo);
```
This will only work when the type implemented Clone. Not all types support Clone as it may be impossible to copy it’s data for example with file streams.
Ownership and borrowing apply to all methods:
```rust
fn main() {
	let a = String::from("Hello"); let b = return_param(a);
	let c = length(b);
    println!("{}", c);
}

fn return_param(param: String) -> String { 
	return param;
}

fn length(param: String) -> usize {
	return param.len();
}
```
When main is executed both a and b are lost, length takes ownership of the string and it is dropped


at the end of length, to keep b in memory either of the following changes could be made:
```rust
# fn main() {
# let str = String::from("test");
# let _ref_len = length_ref(&str);
# let (nstr, len) = length(str);
# println!("({},{})", nstr, len);
# }

fn length_ref(param: &String) -> usize {
	return param.len(); //not dereferenced:
	//because param is a reference len() will return it's result as a reference
	//and because usize implements Copy it will be automatically dereferenced
}

//or

fn length(param: String) -> (String, usize) { 
	let len = param.len();
	return (param, len);
}
```
References are just pointers and so don’t take ownership but instead the value is borrowed, there are some rules around this for example only one mutable reference can exist at once. Because of this a potential helpful way to think about this is shared vs unique, you can as many read only references as you want shared around but when writeable only a single unique reference can exist (to avoid race conditions, etc).

Rust supports generics like Kotlin and they are expressed like this: `Vec<Item>`, occasionally you might see `Vec<'a Item>` the `'a` is a lifetime notation and these are used to guide the compiler as to how long references will be alive. The lifetime name doesn’t matter but the standard names are `'a`, `'b` and `'c`, except for `'static` which means the variable must always be available, i.e. a hardcoded value.
 