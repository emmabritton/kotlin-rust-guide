# Primitives

In Kotlin there are few commonly used primitive types:

| Name| Bits | Type |
| - | :-: | - |
| Byte | 8 | Signed Integer |
| Int | 32 | Signed Integer |
| Long | 64 | Signed Integer | 
| Float | 32 | Floating Point |
| Double | 64 | Floating Point |
| Char | 16 | UTF-16 Character |
| Boolean | N/A | Boolean |

Currently in Kotlin all the numbers are signed although there are experimental unsigned integers available.

Rust uses a prefix followed by the bit size to create a number type (e.g. i32 meaning a 32 bit signed integer), these are the prefixes:

| Character | Type |
| :-: | - |
| i | Signed Integer |
| u | Unsigned Integer |
| f | Floating Point |

Floating points are 32 and 64 bit only but integers can be 8, 16, 32, 64, and 128 bits; there are also two architecture dependent sizes: `isize` and `usize` these are whatever the pointer size is for the CPU (most new computers and phones that is 64 bits). 
As an example the equivalent to a Kotlin `Int` is `i32` and a `Double` is `f64`. 

`usize` is important as it's the primary number type: it's used in array, list and string formatting indexing and lengths/sizes of objects.

Suffixes for literals exist in Rust like in Kotlin but rather being for some types, suffixes exist for all primitives and they are the name of type, e.g. `3_i32` or `10.3f32`, the suffixes are only necessary if the compiler can not infer the type or if you want to specify it; also floating point numbers can be written without the 0, e.g. `1.`

Booleans and Chars are the same in both languages although it's `bool` instead of `Boolean`, and `char` instead of `Char`. See the [Strings chapter](./types_strings.md) for more information about how unicode is handled in Rust.
