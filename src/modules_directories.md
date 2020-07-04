# Directories

When organising code it is common to group files in a directory. This requires a mod.rs file per directory, at minimum it must reference the other files in the directory to expose them to the compiler:
```plaintext
project 
├ main.rs
├ foo.rs
└ bar 
  ├ mod.rs
  └ inner.rs

```
```rust,ignore
//main.rs
mod foo; 
mod bar;

//bar/mod.rs
mod inner;
```
This would expose all files to the compiler.