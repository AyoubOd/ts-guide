function logged(constructor: Function, ...args: any[]) {
  console.log("new instance has been created");
}

@logged
class Test {
  constructor() {}
}

function enumerable(value: boolean) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.enumerable = value;
  };
}

// const format = () => {
//   return (target: Object, key: string, descriptor: PropertyDescriptor) => {
//     const original = descriptor.value;

//     descriptor.value = (...args: any[]) => {
//       return original.apply(this, args);
//     };

//     return descriptor;
//   };
// };

function format<
  This,
  Args extends any[],
  Return extends string,
  Fn extends (this: This, ...args: Args) => Return
>(target: Fn, context: ClassMethodDecoratorContext<This, Fn>) {
  return function (this: This, ...args: Args) {
    const val = target.call(this, ...args);
    return val.toUpperCase();
  };
}

class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }

  //   @enumerable(false)
  @format
  greet() {
    return "Hello, " + this.greeting;
  }
}

console.log(new Greeter("message").greet());
