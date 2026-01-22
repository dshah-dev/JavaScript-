// extends // super // Static // Getters and Setters

// extends and Super
// extend has Automatic Prototype Chaining
// JavaScript does NOT support multiple inheritance using extends
// super() must be called before using this in a child class constructor.

class Vehicle {
  start() {
    console.log("Vehicle started");
  }
}

class Car extends Vehicle {
  drive() {
    console.log("Car is driving");
  }
}

class Parent {
  constructor(name) {
    this.name = name;
  }
}

class Child extends Parent {
  constructor(name, age) {
    super(name);   
    this.age = age;
  }
  greet(){
    console.log(`${this.name} - ${this.age}`);
    }

}

class NewChild extends Parent {
  greet() {
    super.greet();
    console.log("Welcome");
  }
}
const superUser = new Child('Dhaval',21);
superUser.greet();

// Static
// Static methods are methods that can be called on the class directly without creating an object.
class summing {
  static add(a, b) {
    return a + b;
  }
}
console.log(`Sum is : ${summing.add(2, 3)}`); 


// Getters and Setters
class User {
  get name() {
    return this._name;
  }
  set name(val) {
    this._name = val;
  }
}
