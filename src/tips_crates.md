# For crates

## Date Formatting

### Chrono

Using `DateTimeFormat.forPattern("<pattern>").print(DateTime.now())` for Kotlin and `Utc::now().format("<pattern>")` for Rust.

|   | Kotlin/JodaTime | Rust/Chrono | Example |
| - | - | - | - |
| Date | `yyyy-MM-dd` | `%Y-%M-%D` | 2000-01-01 |
| Text Date | `dd MMM yyyy` | `%e %b %Y` | 15 Jun 2004 |
| Time | `HH:mm:ss` | `%H:%M:%S` | 14:12:56 |
| to ISO 8601 | `DateTime.now().toString()` | `Utc::now().to_rfc3339_opts( SecondsFormat::Millis, true)` | 1996-12-19T16:39:57.000Z |
| from ISO 8601 | `DateTime.parse` | `Utc::parse_from_rfc_3339` ||

## JSON Parsing

### Serde

Add this to `cargo.toml`:
```toml
serde = { version = "1.0", features = ["derive"] }
serde_json = "1.0"
```

**Kotlin**

```kotlin
data class Example(
    val name: String,
    @SerializedName("num")
    val someNumber: Int
)

fun convert(json: String, example: Example) {
    val outputExample: Example = Gson().fromJson<Example>(json, Example::class.java)
    val outputJson: String = Gson().toJson(example)
}
```

**Rust**

```rust,ignore
#[derive(Serialize,Deserialize)]
struct Example {
    name: String,
    #[serde(rename = "num")]
    some_number: i32
}

fn convert(json: String, example: Example) {
    let output_example: Example = serde_json::from_str(&json).unwrap();
    let output_json: String = serde_json::to_string(&example).unwrap();
}
```

## Dependency Injection

### Silhouette

**Rust**
```rust,ignore
use silhouette::facade::Container;
<<<<<<< HEAD

// will always use the same pool
Container::singleton(&|_| DBPool::new())?;

// will resolve a new connection each time
Container::bind(&|container| -> DBConnection {
    let shared_pool = container.resolve::<DBPool>().unwrap();

    shared_pool.get_conn()
})?;

// somewhere else in your app...
let connection: DBConnection = Container::resolve()?;
```
=======
// will always use the same pool
Container::singleton(&|_| DBPool::new())?;
// will resolve a new connection each time
Container::bind(&|container| -> DBConnection {
    let shared_pool = container.resolve::<DBPool>().unwrap();
    shared_pool.get_conn()
})?;
// somewhere else in your app...
let connection: DBConnection = Container::resolve()?;
```


>>>>>>> f698240 (Add another common error)
