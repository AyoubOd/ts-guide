"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.simpleGreet = void 0;
function greet(name) {
    return `Hello, ${name}!`;
}
exports.default = greet;
const simpleGreet = () => {
    console.log("Hello world!");
};
exports.simpleGreet = simpleGreet;
