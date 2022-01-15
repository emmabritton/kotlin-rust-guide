# Deriving and implementing

Let’s say you make a type: Person. It has a first name, last name, date of birth, and occupation. It has functions to get the whole name and their age.

```rust,ignore
use chrono::Date;
use chrono::offset::{*};

struct Person<'a> { 
	first_name: &'a str, 
	last_name: &'a str, 
	date_of_birth: Date<Utc>, 
	occupation: &'a str
}

//Constructors
impl <'a> Person<'a> {
	//no self param means this is a static method 
	fn new(first_name: &'a str,
		last_name: &'a str,
		year: u32,
		month: u32,
		day: u32,
		occupation: &'a str) -> Person<'a> {
		return Person {
			first_name,
			last_name,
			date_of_birth: Utc.ymd(year as i32, month, day), 
			occupation
		}; 
	}
}

//Methods
impl <'a> Person<'a> {
	//self param means this is an instance method 
	//as it's a reference this method does not consume 
	//the object
	fn whole_name(&self) -> String {
		return format!("{} {}", self.first_name, self.last_name); 
	}

	fn age_in_years(&self) -> i32 {
		let weeks = Utc::today().signed_duration_since(self.date_of_birth).num_weeks();
		return (weeks / 52) as i32;
	} 

	//the self here isn't a reference so the object
	//is consumed by this method and won't exist
	//after this is method is called
	fn into_tuple(self) -> (String, i32) {
		return (self.whole_name(), self.age_in_years());
	}
}

fn main() {
	//Double colon is for static methods
	let person = Person::new("John", "Smith", 1988, 07, 10, "Author");
	 
	//Period is for instance methods
	println!("{} is a {} who is {} years old.", 
		person.whole_name(), 
		person.occupation, 
		person.age_in_years());
}
```

The `'a` lifetime tells Rust that the `&str`s will be available as long as the parent `Person` is.
The sample uses the `chrono` crate, it is a simple to use and common date and time library. If we want to print the object we must implement the Display like this:
```rust
use std::fmt;

# struct Person { 
# first_name: String, 
# last_name: String, 
# occupation: String
# }

impl fmt::Display for Person {
	fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
		return write!(f, "({} {}, {})", 
			self.first_name, 
			self.last_name, 
			self.occupation);
	} 
}
```
You can now write `println!("{}", person)`, there are many traits that can be implemented for any struct that’s part of your project.
To avoid boilerplate Rust can automatically derive some traits for structs like so:
```rust
#[derive(Debug, Copy, Clone, PartialEq, PartialOrd, Hash, Default)]
struct Foo {} 
```
| Trait | Use |
| - | - |
| Debug | Automatically generates the equivalent of data classes toString(), use with {:?} instead of {} |
| Clone | Implements the clone() method on the struct | 
| Copy | Allows structs to be cloned automatically instead of transferring ownership when assigned to new variable |
| PartialEq | Implements equality checking and enables use of the == and != operators on the struct |
| PartialOrd | Implements comparison and enables use of the > and < operators on the struct for types where the comparison may be impossible (e.g. floating numbers) |
| Eq | Marker trait (like Sync) meaning that all fields can be always and correctly compared, not valid for all types (e.g. floating numbers) |
| Ord | Same as PartialOrd but for types where comparison is always possible | 
| Hash | Automatically generates the equivalent of data classes hashCode(), required to use the struct as key in HashMaps |
| Default | Implements a default value for all fields, see [Default](./classes_default.md) |

All of these require all the fields in the struct to implement the same traits. Numbers, strings, etc implement all the built in derivable types. As with `PartialEq` and `Eq` Rust often has two versions of a trait, one that is allowed to fail (and so will generally return `Result` or `Option`) and another that is not allowed to fail. In this case `Eq` will panic if something goes wrong, likewise there is `From` and `TryFrom` for converting structs, `From` will panic if it fails and `TryFrom` will return `Err` if it fails.