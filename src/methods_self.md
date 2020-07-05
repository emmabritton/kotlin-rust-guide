# this/self

A method in a impl for a struct may have a param for the struct, it must always be the first parameter and does not have a name:

| Parameter | Meaning | Usage |
| - | - | - |
| \<None> | A static method (accessed via ::) | For constructors/builders or grouping methods |
| self | The object itself (this means unless the method returns Self it will dropped after this method) | Converting the object into another object |
| &self | A immutable reference to itself | Getting a value or perform a action that doesn't effect this object |
| &mut self | A mutable reference to itself | Setting a value or perform an action that changes internal values |

An example of naming conventions:
```rust,ignore
struct Foo {
	...
}

impl Foo {
	//Constructor: new()
	fn new() -> Foo {}
}

impl Foo {
	//Getter: x()
	fn value(&self) -> i32]
	//Setter: set_x()
	fn set_value(&mut self, value: i32) {}
	//Is/Has: is_x()
	fn is_empty(&self) -> bool {}
	//Clone and convert: as_x()
	fn as_bar(&self) -> Bar {}
	//Convert: into_x()
	fn into_another_object(self) -> Bar {}
}
```

See also <https://rust-lang.github.io/api-guidelines/naming.html>