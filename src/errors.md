# Common bugs/issues

### Cloning a reference returns a reference despite the signature being a value
This can because the struct doesn’t implement/derive `Clone`

### cannot move out of borrowed content when using unwrap()
This is because `unwrap()` consumes the reference (it’s self parameter is just `self`), to fix this use `variable.as_ref().unwrap()`.

### No method named `..` found for Rc<RefCell<X>> 
Most likely you have imported `use std::borrow::BorrowMut`, remove it.
The error is caused because there are two methods named `borrow_mut` and importing the trait causes the wrong one to be called. See [GitHub issue](https://github.com/rust-lang/rust/issues/39232)