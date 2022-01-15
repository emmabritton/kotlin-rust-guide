# Constants

In Rust there are two types of constants `const` and `static`. `const` are immutable values hardcoded into the program. statics are optionally mutable values that are globally available. Using mutable statics is unsafe unless wrapped in thread safe structs such as `Arc` and `Mutex`. (See [Concurrency](./concurrency.html))

```rust
const VERSION: u32 = 1;
static PROGRAM_NAME: &'static str = "Example";
```

Currently const and static values must be known at compile time. To get around this you can use the [lazy_static](https://github.com/rust-lang-nursery/lazy-static.rs) crate, it works like `by lazy {}` in Kotlin:

```rust,ignore
use lazy_static::lazy_static;

lazy_static! {
	static ref A_MAP = HashMap::new();
}
```

const values are inserted at compile time where ever they were used, and so if you make a a mutable constant every use will be it's own instance.

A method can be constant if it's all of it's internal are constant as well, for example:
```rust
const FOO: usize = 1;
const BAR: usize = 2;

const RESULT: usize = add(FOO, BAR);

const fn add(lhs: usize, rhs: usize) -> usize {
	lhs + rhs
}
```