# Creating macros

## Macro template

```rust, ignore
macro_rules! <name> {
    (<args>) => {
        <body>
    };
}
```

* `<name>` can be any valid rust ident
* `<args>` see below
* `<body>` see below

### Arguments

Arguments can be empty, or combinations of variables and variadic.

Each arg must be the format `$<name>:<type>`. (i.e. `$example:literal` )

* `<name>` can be any valid rust ident
* `<type>` must be one of

| type | description |
|------|-------------|
| literal | Rust literal, such as a number |
| expr | A single expression |
| ty | Rust type |
| ident | Rust ident |
and [others](https://doc.rust-lang.org/reference/macros-by-example.html#metavariables)

For example, this macro makes methods that adds two numbers:
```rust
macro_rules! add_numbers {
	($method_name:ident, $num_type:ty) => {
		fn $method_name(lhs: $num_type, rhs: $num_type) -> $num_type {
			lhs + rhs
		}
	}
}
```

When called with `add_number!(add_i32, i32);` this code is generated:
```rust
fn add_i32(lhs: i32, rhs: i32) -> i32 {
	lhs + rhs
}
```

#### Variadic

Arguments can be written as `$( <arg> )*` for 0 or more and `$( <arg> )+` for 1 or more values. (i.e. `$( $name:literal )+`), this would allow `example!(1 2 3)`.

To support commas you can write `$( <arg> ),*`, this would allow `example!(1,2,3)`.

#### Optional

Anything can be optional using this syntax `$( <thing> )?`, this include commas, such as 
* optional trailing comma: `macro_rules! example($var1:literal, $var2:literal $(,)?)`
* optional commas in variadic: `macro_rules! list($( $items:literal )$(,)?*)`

### Body

The body must be an expression or single line, to support multiple lines surround the code in {}, this is often written as 

```rust, ignore
macro_rules! <name> {
    (<args>) => {{
        <body>
    }};
}
```

#### Variadic

To use these arguments you have to surround them in `$( <name> )*` in the body.
Anything can be written in the parentheses and it will be repeated once per item in `<name>`

For example if you want to print each item on a different line:

```rust
macro_rules! print_nums {
    ($( $numbers:literal ),+) => {{
        $( println!("{}", $numbers); )*
    }};
}
```

If called with `print_nums(1,2,3);` This generates
```rust
println!("{}", 1);
println!("{}", 2);
println!("{}", 3);
```

#### Optional
Optional arguments should also be surrounded like `$( <name> )*`, anything can be written inside like before.

When dealing with optional args you may need to get an alternative value

```rust
macro_rules! add_nums {
    ($num1: expr $(, $num2: expr)?) => {
        $num1 + $( $num2 )*
    };
}
```
This works fine if called with `add_nums!(1,2)` but with `add_nums!(1)` the code generated would be `1 + ` which fails to compile.

To get around this use something to offer a substitute such as

```rust
macro_rules! some_or_none {
    () => { None };
    ($entity:expr) => { Some($entity) }
}

//or

macro_rules! or_else {
    ($value:literal, $other: literal) => { $value};
    (, $other: literal) => { $other };
}
```

These are used like this

```rust
macro_rules! add_nums {
    ($( $num1: expr )? $(, $num2: expr)?) => {
        or_else!($( $num1 )*, 0) + or_else!($( $num2 )*, 0)
    };
}
```

### Overloading

Macros can support different argument sets:
```rust
macro_rules! add_nums {
	($num1:literal, $num2:literal) => { $num1 + $num2 };
	($num1:literal, $num2:literal, $num3:literal) => { $num1 + $num2 + $num3 };
}
```

This can be called with `add_nums!(1,2);` and `add_nums!(1,2,3);`

### Hygiene

Macros have 'hygiene' which means to access something from your crate you'll have to spell out the full path:
```rust,ignore
$crate::path::some_method(..)
```
`$crate` refers to your crate.

### Visibility

Macros have to be annotated with `#[macro_export]` for it to be usable by other modules/crates.

### Advanced

Macros will accept extra text which can be required to invoke the macro:
```rust
macro_rules! add_nums {
    ($num1: literal + $num2: expr) => {
        $num1 + $num2
    };
    (($num1: expr) + $num2: expr) => {
        $num1 + $num2
    };
}
```

Would have be called like this `add_nums!(1 + 2)` or `add_nums!((some_var) + 2)`

With custom text in the arguments then either commas are needed to separate them 
`macro_rules! example($thing1:expr, $thing2:expr)` or all but the last expr must be declared and called surrounded by parentheses `macro_rules! example(($thing1:expr) $thing2:expr)` and `example!((thing1) thing2);`

See more [Macros by example](https://doc.rust-lang.org/reference/macros-by-example.html)