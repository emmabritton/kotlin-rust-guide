# Not in standard

Some functionality built in to Java/Kotlin isn’t part of the Rust std lib and you’ll need to use these crates to add it:

| Functionality | Crate | Notes |
| - | - | - |
| Random numbers | rand | Maintained by Rust team |
| Serialization | serde | Does XML, JSON, protobuf, etc |
| Lazy static variables | lazy_static | |
| Regix | regex | Maintained by Rust team |
| Base64 | base64 | |
| UUID | uuid | | 
| Enums | strum | Enum features variant names, properties, count, list, ordinal |