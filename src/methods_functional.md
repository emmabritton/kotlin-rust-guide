# Functional Programming

Rust supports lambdas (or closures, etc), the parameters are written comma separated in pipes and the body only requires curly braces if it goes over multiple lines:
```rust
	let x = vec![1,2,3];
	let y: Vec<usize> = x.iter()
		.map(|it| it + 1)
		.collect();

# println!("{:?}", y);
```
Unfortunately with Rust (like Dart) `map()`, etc return a Map object that has to be converted back into a list using `collect()`:

Rust also supports higher order functions:
```rust,ignore
fn foo(f: impl Fn(i32) -> i32)
fn foo<F>(f: F) where F: Fn(i32) -> i32 
fn bar(f: impl MutFn(String) -> usize)
```
Fn is a lambda that can not change external state

FnMut is a method that can change external state

FnOnce is a method that can change external state, but is only allowed to be called once

Box allows you to store values on the heap, this is sometimes necessary as the stack can only hold values with a known size (at compile time), as the Box is just a pointer it has a known size unlike, for example, lambdas.