/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Binding - The value of this will be the window/console when in the global scope
* 2. Implicit Binding - The value of this the object before the dot when a function is called by a preceding dot.
* 3. New Binding - The value of this is when a constructor function uses a specific instance of the object 
     that is created and returned for its own purpose.
* 4. Explicit Binding - The value of this is the call or apply method is used.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayName(name) {
  console.log(this);
  return name;
}
sayName("Frodo");

// Principle 2

// code example for Implicit Binding
const myObj = {
  greeting: "Hello there,",
  sayHello: function(name) {
    console.log(`${this.greeting} my name is ${name}`);
    console.log(this);
  }
};
myObj.sayHello("Craig");

// Principle 3

// code example for New Binding
function CordialPerson(greeter) {
  this.greeting = "Hello ";
  this.greeter = greeter;
  this.speak = function() {
    console.log(this.greeting + this.greeter);
    console.log(this);
  };
}

const jerry = new CordialPerson("Newman");
const newman = new CordialPerson("Jerry");

jerry.speak();
newman.speak();

// Principle 4

// code example for Explicit Binding
jerry.speak.call(newman);
newman.speak.apply(jerry);
