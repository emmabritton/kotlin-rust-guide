# Concurrency

To pass values safely between threads you need to use Mutexes or Atomic values in most languages, Rust is no different. For example:

```rust
use std::thread;
use std::sync::atomic::{AtomicI8, Ordering};
use std::sync::Arc;
use std::time::Duration;

fn main() {
    //AtomicXX implement Sync meaning they can be used 
    //in multiple threads safely
    //Arc (Atomically Reference Counted) allows for multiple, independent
    //references of a single value to exist outside of the borrow checker
    //for a tiny overhead by counting the number of references that
    //exist
    let number = Arc::new(AtomicI8::new(0i8));
    //Make a copy of the arc, any number of copies can exist but
    //the each copy has to be moved into it's thread
    let thread_number = number.clone();

    //move means this lambda is taking ownership of any variable
    //it uses, this is necessary for lambdas executed in a different
    //context e.g. in a different thread
    thread::spawn(move || {
        let mut i = 0;
        loop {
            //ordering controls how the atomic value is set/read
            //You should probably always use SeqCst
            thread_number.store(i, Ordering::SeqCst);
            i += 1;
            thread::sleep(Duration::from_millis(500));
            if i > 10 {
                break;
            }
        }
        println!("Done");
    });

    loop {
        println!("{}", number.load(Ordering::SeqCst));
        if number.load(Ordering::SeqCst) >= 10 {
            break;
        }
    }
}
```

This program will continually print out the value stored in `number` until the thread reaches 10