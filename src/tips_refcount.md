# Reference counting

Sometimes you need bypass the borrow checker, for example, you want to use a reference as a pointer to an item in a collection or you’re passing values between threads. To do this you use the Arc (Atomically Reference Counted) class, it adds a small overhead in the form of a count and some extra code to monitor and update the count. Arc will keep the value alive as long as any Arc value is still alive, when the last Arc value is dropped the value will be as well. To make multiple references to an value protected by Arc clone it:
```rust
use std::sync::Arc;

fn main() {
  let some_heap_thing = Thing::new();
  let arc_thing = Arc::new(some_heap_thing);
  thread1(arc_thing.clone()); 
  thread2(arc_thing.clone()); 
}

fn thread1(thing: Arc<Thing>) {
  thing.methods_accessed_in_normal_way();
}

# fn thread2(thing: Arc<Thing>) {}
# struct Thing {}
# impl Thing { 
# fn new() -> Thing {Thing {} } 
# fn methods_accessed_in_normal_way(&self) {}
# }
```


The value in the Arc can not be mutable unless it’s contained in another class, as the value will need to be protected against concurrent updates, the wrapper types are Mutex and RwLock. The differences are that RwLock will allow any number of concurrent readers but only one writer and Mutex only allows one reader or writer at a time. 