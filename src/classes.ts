// Classes and Inheritance

class Animal {
  name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class Dog extends Animal {
  move(distanceInMeters: number): void {
    console.log("moving function from dog class!");
  }
}

const dog = new Dog("Rockey");
dog.move(33);

// Public, Private, and Protected Modifiers
class Person {
  private name: string;
  constructor(name: string) {
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
const identity = <T>(arg: T): T => {
  console.log(typeof arg);
  return arg;
};
identity(33);
identity("string");

// Generic Interfaces
interface GenericIdentityFn<T> {
  (arg: T): T;
}

const fn: GenericIdentityFn<string> = (arg) => {
  return arg;
};

const fn2: GenericIdentityFn<string[]> = (args) => {
  return args;
};
