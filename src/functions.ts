// Function types
const greet = (something: string): string => {
  return "welcome";
};
const multiply = (n1: number, n2: number): number => n1 + n2;

// Optional and Default Parameters
const createEmail = (to: string, subject: string = "No Subject") => {
  console.log("Default param");
};

const add = (x: number, y: number, z?: number) => {
  return x + y + (z ? z : 0);
};

// Rest params
const concatenateString = (...rest: string[]): string => {
  return rest.join("");
};

const maxNumber = (...rest: number[]): number => {
  return Math.max.apply(null, rest);
};
