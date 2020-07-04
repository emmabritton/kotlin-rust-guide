# Result and exceptions

Result<V, E> is used for when a method may fail, it can contain the result or an error. It is created via `Ok()` and `Err()`
```rust,ignore
fn get(&self, idx: u32) -> Result<Item, String> { 
	if self.contains(idx) {
		Ok(self[idx]) 
	} else {
		Err("404") 
	}
}

fn main() {
	let result = foo.get(10);
	match result {
		Ok(item) => println!(item), 
		Err(e) => println!(e)
	} 
}
```
You can also do the equivalent of `var!!` with both Option and Result by using `var.unwrap()` and `var.expect("some message")`. Both methods will crash the app if it’s Err/None, expect() will also write the message to the console.

To avoid having to write unwrap() every time if you’re in a method that returns a Result you can just write `var?`, if `var` is an Err the method will return the Err immediately.

To crash a Rust program you should use `panic!("message")`. This will print the message and stacktrace to the command line.