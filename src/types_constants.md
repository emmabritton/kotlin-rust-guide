# Constants

In Rust there are two types of constants `const` and `static`. `const` are immutable values hardcoded into the program. statics are optionally mutable values that are globally available. Using mutable statics is unsafe.

```rust
const VERSION: u32 = 1;
static PROGRAM_NAME: &'static str = "Example";
```

Currently const and static values must be known at compile time, so for example they can't be `String`s as to make a string you have to execute a function. To get around this you can use the [lazy_static](https://github.com/rust-lang-nursery/lazy-static.rs) crate, it works like `by lazy {}` in Kotlin:

```rust,ignore
use lazy_static::lazy_static;

lazy_static! {
	let A_STRING = String::from("Any text");
}
```

//TODO const fn