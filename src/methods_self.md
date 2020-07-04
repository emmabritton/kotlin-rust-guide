# this/self

A method in a impl for a struct may have a param for the struct, it must always be the first parameter and does not have a name:

| Parameter | Meaning |
| - | - |
| \<None> | A static method (accessed via ::) | 
| self | The object itself (this means unless the method returns Self it will dropped after this method) |
| &self | A immutable reference to itself |
| &mut self | A mutable reference to itself |

An example:
```rust,ignore
struct Foo {}

impl Foo {
	fn static_method() {}
	fn mutate(&mut self) {}
	fn clone_and_convert(&self) -> Bar {} 
	fn convert_permanently(self) -> Bar {}
}
```
