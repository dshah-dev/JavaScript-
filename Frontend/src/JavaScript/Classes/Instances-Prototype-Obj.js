// Instance → prototype → Object 

// Task 1 :use Class, Constructor, Instance
// Instance → prototype → Object  ie:- User.prototype.greet
// Instances allow us to create multiple independent objects from a class, each maintaining its own state while sharing common behavior. using new keyword
class user {
    constructor(name ,email){
        this.name=name;
        this.email=email;
    }
    getDetails(){
        return `${this.name}  - ${this.email}`;
    }
}
const u1 = new user("Dhaval", "d@gmail.com");
console.log(u1.getDetails());


//Use a method in prototype 
// Allows objects to inherit properties and methods from other objects
//Prototype chain:- object → Class.prototype → Parent.prototype → Object.prototype → null
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log("Hello " + this.name);
};
// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     sayHello() {
//         console.log("Hello " + this.name);
//     }
// }
const p1 = new Person("Dhaval");
p1.sayHello();

