# Cargo

To run and build programs from the command line you should always use cargo (outside of an IDE):
```bash
#Build debug version
cargo build

#Run debug version
cargo run

#Run tests
cargo test

#Build release version
cargo build --release
```

Other command line options:
```bash
#Format all code
cargo fmt

#Linter
cargo clippy

#These have to be installed first by
rustup update
rustup component add rustfmt
rustup component add clippy
```