# Option and nulls

`Option<T>`s are the same as `Optional<T>`s and quite like nullable values and are created via `Some()` and `None`
```rust
fn divide(numerator: f64, denominator: f64) -> Option<f64> { 
	if denominator == 0.0 {
		None //notice no return and no semicolon 
	} else {
        Some(numerator / denominator)
    } //the last value in a method is automatically returned
} //assuming no return call 

fn main() {
	let result = divide(2.0, 3.0);
	match result {
		Some(x) => println!("Result: {}", x), 
		None => println!("Cannot divide by 0"),
	}
}
```