"use strict";
// Function types
const greet = (something) => {
    return "welcome";
};
const multiply = (n1, n2) => n1 + n2;
// Optional and Default Parameters
const createEmail = (to, subject = "No Subject") => {
    console.log("Default param");
};
const add = (x, y, z) => {
    return x + y + (z ? z : 0);
};
// Rest params
const concatenateString = (...rest) => {
    return rest.join("");
};
const maxNumber = (...rest) => {
    return Math.max.apply(null, rest);
};
