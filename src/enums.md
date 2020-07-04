# Enums

Unfortunately enums in Rust work they do in Swift and so no default values can be provided and instead you have to add methods which use matches to provide values:
```rust
enum MobileOs {
  Android, Ios, Windows
}

impl MobileOs {
  fn status(&self) -> &str {
    match self {
      MobileOs::Android => return "alive",
      MobileOs::Ios => return "alive",
      MobileOs::Windows => return "dead",
    }
  }
}

fn main() {
  println!("{}", MobileOs::Android.status());
}
```

Thankfully they can also work like sealed classes:
```rust
enum Example {
  Foo { named_value: i32 },
  Tuple(u8, u8),
  Empty
}

fn main() {
  let foo = Example::Foo { named_value: 45 };
  let tuple = Example::Tuple(1, 2);
  let empty = Example::Empty;
}
```
When coming from other modern languages you be expecting the ability to get a variant count, list or names and add static values to each variant but unfortunately Rust enums do not support any of these features, but all of these can be added with the strum crate.