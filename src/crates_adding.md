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

### Features

Some crates have optional features, often these include macros or provide interop with other crates:

`serde = "1.0.0"` can also be written as `serde = { version = "1.0.0" }`. To include a feature this gets expanded to `serde = { version = "1.0", features = ["derive"] }`.

Some crates will have features that you almost always want:

| Crate | Feature(s) | Description |
| - | - | - |
| `serde` | `derive` | Adds macros to automatically serialize structs |
| `chrono` | `serde` | Allows `DateTime`, etc to be serialized by `serde` |
| `reqwest` | `json`, `gzip` | Adds support for sending/received structs and adds automatic support for gzip |
