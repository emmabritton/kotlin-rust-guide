# Adding crates

Third party libraries are called Crates (and are available from https://crates.io). To add a crate, for example Serde, add this line to Cargo.toml after the [dependencies] line:
```toml
serde = "1.0.0"
```

You’ll still need to import the individual parts of the crate you want to use, for example:
```rust,ignore
use serde::json::Serialize;
```

`::Foo` means import just Foo

`::{Foo, Bar}` means import Foo and Bar 

`::*` means import everything in the module.

You can rename when importing:
```rust,ignore
use example::Foo as Bar;
```

Most of the massive crates have a prelude module that you should import, i.e.
```rust,ignore
use chrono::prelude::*
```

//TODO features