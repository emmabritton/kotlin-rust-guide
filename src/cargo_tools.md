# Tools

To install a tool use `cargo install <tool>`, for example `cargo install cargo-edit`

## Dependency management

**Description**

Allows you to add, remove or update dependencies from the command line

**Usage**

`cargo add <crate>`, e.g. `cargo add chrono`

`cargo rm <crate>`
	
`cargo upgrade`

**Link**

[cargo-edit](https://github.com/killercup/cargo-edit)

## Dependency graph

**Description**

Generates a dependency graph for your project

**Usage**

`cargo deps`

**Link**

[cargo-deps](https://github.com/m-cat/cargo-deps)

## Security Audit

**Description**

Audit Cargo.lock files for crates with security vulnerabilities reported to the RustSec Advisory Database.

**Usage**

`cargo audit`

**Install commands**

`cargo install cargo-audit`

**Link**

[cargo-audit](https://github.com/RustSec/cargo-audit)

## Macro Expansion

**Description**

Prints out the result of macro expansion and `#[derive]` expansion applied to the current crate.

**Usage**

`cargo expand [module]`

**Install commands**

`cargo install cargo-expand`

**Link**

[cargo-expand](https://github.com/dtolnay/cargo-expand)

## Outdated dependencies

**Description**

Prints out report of out of date dependencies.

**Usage**

`cargo outdated`

**Install commands**

`cargo install cargo-outdated`

**Link**

[cargo-outdated](https://github.com/kbknapp/cargo-outdated)