# Strings

In both Kotlin and Java, essentially, there is just one String type: String. Whether the text is hardcoded, from a file or user input the same class is used. Rust has two String types: String and str. A hardcoded string will be of type `&'static str` and a string read from anywhere else maybe a `String` or `&str` depending on what the method returns. They can be converted between themselves, in most circumstances.

`String` is a pointer to a string in heap with a capacity, this means it can grow and can be mutable. A `&str` is a char array and so has a fixed length.
If you attempt to slice a string so it would cause a Unicode character to be broken Rust will panic. Use the .chars() method to access each character independently. So to get the length of a string in bytes you use foo.len() and to get the number of characters you use foo.chars().count(). 

Note that std Rust has limited supported for unicode and you may need to use crates to add missing features, this is because unicode changes regularly and the unicode table is quite large and has to be compiled into your program.

| Name | Description | 
| - | - |
| unicode-segmentation | Used to iterate over grapheme clusters |
| unicode-normalization | Converts char + modifier into single character, this is vital if you need to compare Unicode strings |