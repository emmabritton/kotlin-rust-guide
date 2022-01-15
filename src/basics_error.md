# Error Handling

Rust has a generic error interface: `std::error::Error`, it's optionally may have a source error and/or backtrace. Instead of exceptions and try..catch the follow is used:

**Kotlin**
```kotlin
fun main() {
  try {
    openSocket()
    println("Worked")
  } catch (e: IOException) {
    println("Error: " + e.message)
  }
}

```

**Rust**
```rust
# use std::error::Error as StdError;
# type Error = Box<dyn StdError>;

fn main() {
	match open_socket() {
		Ok(()) => println!("Worked"),
		Err(e) => println!("Error: {}", e)
	}
}

# fn open_socket() -> Result<(), Error> { Ok(()) }
```

You can call `unwrap()` on a `Result` to get the success value or crash the app. To avoid repetitive code you can use `?` which will immediately return the error:

```rust,ignore
fn unwrap_example() {
	let foo = open().unwrap();
}

//the question mark operator is only valid in methods that return Result
fn better_example() -> Result<(), Error> { 
	let bar = open()?;

	Ok(())
}
```

Some crates errors aren't compatible with each other and so have to be converted to something before the error can be returned:

```rust,does_not_compile,ignore
fn main() -> Result<(), Error> { 
	let file = open_file()?; //Error type is IoError
	let socket = open_socket()?; //Error type is NetError

	Ok(())
}
```

This example wouldn't compile because the size in memory of a return type must be known at compile time and `Error` is a trait (an `interface` in Kotlin). So it must be wrapped like so `Box<dyn Error>`, `Box` moves the value to the heap and is essentially a pointer, `dyn` just means the type is dynamically dispatched (i.e. a trait). (see https://doc.rust-lang.org/std/keyword.dyn.html)

1. Create a wrapper type and implement it for all error types that you have to handle
2. Use [eyre](https://github.com/yaahc/eyre)

I highly recommend anyhow for all apps, it automatically handles all error types and reduces boilerplate:

```rust,ignore
use eyre::Result; //import eyre Result and Error instead of std as needed

fn main() -> Result<()> { //Result only has single parameter
	Ok(())
}
```
