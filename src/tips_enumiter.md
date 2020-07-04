# Indexed iteration

Kotlin provides forEach, map, filter, etc for iterators but these only give you the element if you also need the index as Kotlin provides forEachIndexed, mapIndexed, filterIndexed, etc

```kotlin
list.forEach { element ->
	println(element)
}
list.forEachIndexed { i, element -> 
	println("${i}: ${element}")
} 
```

Rust also has this feature but it works differently, instead of different methods the iterator type is changed via enumerate:

```rust
# let list = vec!["a", "b", "c"];
list.iter()
	.for_each(|element| println!("{}", element));

list.iter()
	.enumerate()
	.for_each(|(i, element)| println!("{}: {}", i, element));
```

This has the downside that all later operators must also handle the index as well.