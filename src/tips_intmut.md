# Interior mutability

Sometimes you need to have a mutable value but can only pass it around as a value or reference, to achieve you can use the `Cell` structs.

`Cell` is a wrapper around a value that can be changed at any point.

`RefCell` is the same as `Cell` but allows the value to be exposed as a reference.

`RwLock` is the same as `RefCell` but can be shared across threads.

`Mutex` is the same as `RefCell` but can make references that can be shared across threads. 

All of these are safe, they use reference counting and/or memory swapping to update values.

Example:

```rust
# use std::cell::RefCell;

fn main() {
    let not_mutable = Person {
        name: RefCell::new(String::from("Ray Britton"))
    };

    not_mutable.change_name(String::from("New Name"));

    println!("{}", not_mutable.name.borrow());
}

struct Person {
    name: RefCell<String>
}

impl Person {
    fn change_name(&self, new_name: String) {
        self.name.replace(new_name);
    }
}
```