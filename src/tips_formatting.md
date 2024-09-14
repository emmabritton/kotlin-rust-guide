# Formatting strings

To format a string, the easiest (and correct) way is to use `format!(string, parameters...)`. String formatting in Rust uses {} as placeholders for parameters.

Formatting is supported by several methods:
* `format!(fmt, values...)` - returns a formatted string
* `print!(fmt, values...)` and `println!(fmt, values...)` - writes a formatted string to stdout
* `write!(Formatter, fmt, values...)` - writes the formatted string into the first parameter

You can pass values into these macros without making them a reference first as they will be turned into references, and so the macros don't take ownership.

### Basics

With

`format!("{}", some_value)`

If `some_value` implements Display then it will printed otherwise you'll get a compile error saying the type doesn't implement Display. All primitives implement Display, but other std types like arrays and collections do not.

How to implement Display for a custom type:

```rust, ignore
struct Point {
    x: i32,
    y: i32
}

impl Display for Point {
    fn fmt(&self, f: &mut Formatter) -> Result<(),fmt::Error> {
        write!(f, "Point({},{})", self.x, self.y)
    }
}
```

then when calling `format!("{}", Point {x: 2, y: 3})` results in `Point(2,3)`. 

Another option exists though, for example if you don't really care about the formatting: `Debug`, which is implemented like this 

```rust
#[derive(Debug)]
struct Point {
    x: i32,
    y: i32
}
```

To print the debug version of a value use `{:?}` (or `{:#?}` to pretty print), calling this `format!("{:?}", Point { x: 3, y: 5})` results in `Point { x: 3, y: 5 }`

All primitives and std types like arrays and collections, and most structs from third party crates, implement `Debug`.

### Param selection

There are several ways to order the params

##### Default
They are used in the order supplied
```rust
println!("{}, {}, {}", 1, 2, 3);
```
produces `1, 2, 3`

##### Positional/Indexed
```rust
println!("{1}, {2}, {0}", 1, 2, 3);
```
produces `2, 3, 1`

##### Named
Non named parameters must come before any named parameters
```
println!("{0}, {foo}, {bar}", 3, bar = 1, foo = 2);
```
produces `3, 2, 1`

##### Referencing variables
```rust
let foo = 1;
println!("{foo} = {}", 2);	
```

produces `1 = 2`

Named params can formatted with debug by adding `:?`, `format!("{foo:?}")`

### Padding

`"{:>5}"` Left pad with up to 5 spaces

`"{:<7}"` Right pad with up to 7 spaces

`"{:^22}"` Centre with up to 11 spaces on both sides

Padding with any character:

`"{:_>5}"` Left pad with up to 5 underscores 

`"{:#<7}"` Right pad with up to 7 hashes 

`"{:c^22}"` Centre with up to 11 ’c’s on both sides

### Numbers

`"{:.3}"` Will print 3 fractional digits (adding 0s on the end if necessary) but only if it’s a floating point number

`"{:+3}"` Print sign

`"{:03}"` Print at least 3 digits (padding with 0s on the start if necessary), if negative the minus symbol will replace a 0

Example: `format!("{:>5} {named}", "Foo", named=123)`


To have variable parts (such as variable length padding) use this syntax:

`("{1:.0$}", 1, 1.22)`

This will print 1.2, the syntax is `{value_index:.precision_index$}`

`("{1:=<0$}", 10, "test")`

This will print test======, the syntax is `{value_index:padding_char<length_index$}`

Note that invalid parameter details are ignored silently and treated as {}. If debugging via logging consider using dgb!():

```rust,ignore
let x;
x = dbg!(1 * 4); 
```

prints
`[src/main.rs:3] 1 * 4 = 4`