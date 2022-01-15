# Architecture

Kotlin is an object orientated language which means that generally data and methods are grouped together in classes and it’s very rare to have methods outside of classes even though Kotlin fully supports this. Also classes can extend each other so a lot of frameworks (such as Android or AWT) rely heavily on inheritance to provide functionality to classes.

Rust is a data orientated language, and programs will more resemble C programs where a program may be made of a few methods and a few structs without any impls. And as impl inheritance is impossible in Rust and trait inheritance doesn’t really add much use, composition is used a lot.

That said grouping logic and data is still fine and done with Rust:

```kotlin
class Point( 
	val x: Float, 
	val y: Float
){
	fun distanceTo(other: Point): Float {...}
	fun angleTo(other: Point): Float {...} 
}
```
can become
```rust,ignore
struct Point {
	x: f32,
	y: f32 
}

impl Point {
	fn new(x: f32, y: f32) -> Point {
		return Point {x, y}; 
	}
}

impl Point {
	fn distance_to(other: Point) -> f32 {...}
	fn angle_to(other: Point) -> f32 {...} 
}
```