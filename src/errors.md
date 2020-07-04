# Common bugs/issues

### Cloning a reference returns a reference despite the signature being a value
This can because the struct doesn’t implement/derive Clone.

### cannot move out of borrowed content when using unwrap()
This is because unwrap() consumes the reference (it’s self parameter is just self), to fix this use variable.as_ref().unwrap().