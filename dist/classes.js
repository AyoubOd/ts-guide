"use strict";
// Classes and Inheritance
class Animal {
    constructor(theName) {
        this.name = theName;
    }
    move(distanceInMeters = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
class Dog extends Animal {
    move(distanceInMeters) {
        console.log("moving function from dog class!");
    }
}
const dog = new Dog("Rockey");
dog.move(33);
// Public, Private, and Protected Modifiers
class Person {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
const person = new Person("Ayoub");
person.getName();
// Generics
// function identity<T>(arg: T): T {
//   return arg;
// }
const identity = (arg) => {
    console.log(typeof arg);
    return arg;
};
identity(33);
identity("string");
const fn = (arg) => {
    return arg;
};
const fn2 = (args) => {
    return args;
};
