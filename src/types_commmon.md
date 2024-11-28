# Common types

### Lists

| | Kotlin | Rust |
| - | - | - |
| Type | `List<T>`, `MutableList<T>`, `ArrayList<T>` | `Vec<T>` |
| Constructor | `ArrayList(size)`, `ArrayList(collection)` | `Vec::new()`, `Vec::with_capacity(size)` |
| Shorthand | `listOf(items...)`, `mutableListOf(items...)`, `arrayListOf(items...)` | `vec![size; default]`, `vec![items...]` |

### Maps

| | Kotlin | Rust |
| - | - | - |
| Type | `Map<K, V>`, `MutableMap<K, V>`, `HashMap<K, V>` | `HashMap<K, V>` |
| Constructor | `HashMap(size)`, `HashMap(map)` | `HashMap::new()` |
| Shorthand | `mapOf(items...)`, `mutableMapOf(items...)`, `hashMapOf(items...)` | N/A [^1] |

### Tuples

| | Kotlin | Rust |
| - | - | - |
| Type | `Pair<T1, T2>`, `Triple<T1, T2, T3>` | `(T1, T2, ...)` |
| Constructor | `Pair(value1, value2)`, `Triple(value1, value2, value3)` | N/A |
| Shorthand | `value1 to value2` | `(value1, value2, ...)` |

### Arrays

| | Kotlin | Rust |
| - | - | - |
| Type | `Array<T>` | `[T]` |
| Constructor | `Array(size, builder_method)` | N/A |
| Shorthand | `arrayOf(items...)` | `[items...]` |

[^1] Crates such as [maplit](https://github.com/bluss/maplit) do provide macros for this.
