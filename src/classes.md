# Classes, or the lack there of

In Kotlin has Classes, Abstract Classes, Interfaces, and extension methods. Rust has Traits, Structs, and Impls. 

#### Kotlin
* An interface can have methods but can not have variables with values, and may extend another Interface. It can be supplemented with extension methods or sub classed by other Classes, Abstract Classes or Interfaces.
* A class can have variables and methods, and may extend a Class, an Abstract Class and/or Interface(s). It can be supplemented with extension methods or sub classed by other Classes or Abstract Classes.
* An abstract class can have variables and methods, and may extend a Class, an Abstract Class and/or Interface(s). It can be supplemented with extension methods or sub classed by other Classes or Abstract Classes.

#### Rust
* A trait is like an interface, it defines a list of methods that must be implemented. It can extend other traits, although this is rare.
* A struct is the closest thing to a class but although it has a list of variables it does not have any methods. This can not extend anything.
* An impl is a collection of methods either matching a Trait (like a Class implementing an Interface) or free form from a struct (like a Class), but Impl are not allowed to have variables and if implementing a Trait can not have methods that are not defined in the Trait. An Impl may be defined repeatedly.
* trait and impl can used like extension Methods (although the syntax is closer to Swift than Kotlin).

There is nothing like an abstract class in Rust.


Some Kotlin examples:
```kotlin
interface ParentA {
	fun foo() //no method body, just an api
}

interface ParentB : ParentA { //includes methods from parent 
	fun bar() //no method body, just an api
}

class ClassFoo : ParentA { //includes methods from parent 
	var x = 0; //allowed to have variables with values 
	fun foo() {} //methods must be implemented
}

abstract class AbstractClassA: ParentA, ParentB {}

class ClassBar : AbstractClassA() {
	fun foo() {} //methods must be implemented 
	fun bar() {} //from all parents
	fun foobar() {} //can add new methods
}

fun ParentFoo.example1() {} //Adds method called example1 to all
//implementations and children of ParentA
```
Some Rust examples:
```rust
struct StructFoo { //variables only 
	x: i32
}

impl StructFoo {  //methods only, but can access 
	fn foo() {} //variables from Struct
}               //private methods allowed

trait TraitA { //API only 
	fn bar();
}

trait TraitC : TraitA {
	fn boo(); //anything implementing TraitC must implement TraitA separately
}

impl TraitA for StructFoo { //methods only, can not 
	fn bar() {}             //have methods not in the trait
}
```