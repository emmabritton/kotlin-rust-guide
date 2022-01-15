# Formatting strings

To format a string, the easiest (and correct) way is to use `format!(string, parameters...)`. String formatting in Rust uses {} as placeholders for parameters.

Basics:

`"{}"` will print the result of Display::fmt(), this must be manually implemented "{:?}" will print the result of Debug::fmt(), this can be derived

`"{:#?}"` will pretty print the result of Debug::fmt()

`"{example}"` will print parameter named example

`"{2}"` will print the third parameter

Padding:

`"{:>5}"` Left pad with up to 5 spaces

`"{:<7}"` Right pad with up to 7 spaces

`"{:^22}"` Centre with up to 11 spaces on both sides

Padding with any character:

`"{:_>5}"` Left pad with up to 5 underscores 

`"{:#<7}"` Right pad with up to 7 hashes 

`"{:c^22}"` Centre with up to 11 ’c’s on both sides

Numbers:

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

# Direct variable usage

As of Rust 1.58.0 you can use variables name in the string directly:

```rust
let part = "world";
println!("Hello {part}");
```

Unforutantely this doesn't support complex expressions yet, so you can't do:
```rust,ignore
println!("{some_method()}");
```
or
```rust,ignore
println!("{struct.field}");
```

This should work with any macro that uses `format_args` 