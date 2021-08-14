# A guide to Rust for Kotlin developers

This guide should help developers experienced with Kotlin quickly and easily learn the basics of Rust by comparing the major differences but also how the languages, by the nature of them both being modern languages, have quite a few similar features.

This book is a summary of the official Rust books, as well as forum threads, GitHub issues, and StackOverflow posts I've read and testing I've done.
Please also read the following books for a much more complete understanding of Rust:

| | |
| ----------- | - |
| The official docs (often called the rust book or just the book in discussions) | [Link](https://doc.rust-lang.org/stable/book) |
| A collection of examples for common patterns and tasks | [Link](https://doc.rust-lang.org/stable/rust-by-example) |
| Guide for Cargo (see also the [Cargo chapter](./cargo.md)) | [Link](https://doc.rust-lang.org/cargo/) |


A lot of things you already know are going to be re-explained in this guide for two reasons:
1. as a refresher and just to make your understanding is correct
2. to help explain and draw out differences between the languages; Rust is designed so that the compiler can guarantee some level of correctness in regards to variable access and destruction, and as such it will not compile code it can't predict.







Some of the code samples have Ferris on them:

| Ferris                                                                 | Meaning                                          |
|------------------------------------------------------------------------|--------------------------------------------------|
| <img src="img/ferris/does_not_compile.svg" class="ferris-explain"/>    | This code does not compile!                      |
| <img src="img/ferris/panics.svg" class="ferris-explain"/>              | This code panics!                                |
| <img src="img/ferris/unsafe.svg" class="ferris-explain"/>              | This code block contains unsafe code.            |
| <img src="img/ferris/not_desired_behavior.svg" class="ferris-explain"/>| This code does not produce the desired behavior. |

(taken from the official book)