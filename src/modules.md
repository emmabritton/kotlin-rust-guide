# Modules

When making a project in Rust you are required to have one file (for programs it’s `main.rs`, and `lib.rs` for libraries), it’s also the only file recognised by the compiler. To add a new file to your project you need to add the line (for a file named `new_file.rs`) to `main.rs` or `lib.rs`:
```rust,ignore
mod new_file;
```
Using the following code base:
```rust,ignore
//main.rs
mod foo; //all Rust files must be referenced here for the compiler to find them 
mod bar;

use crate::bar::foobar;

fn main() { 
	foobar();
}
//foo.rs
pub fn public_method() {} 
fn private_method() {}

//bar.rs
use crate::foo::public_method; 
pub fn foobar() {}
```
The foo module has two methods public_method and private_method. private_method is only accessible inside the foo module. The bar module imports the public_method method from the foo module.

`crate` means this project, if using a third party library (for example `serde`) you would write `serde::foo::bar;`.