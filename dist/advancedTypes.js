"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.intersectionArgFunction = void 0;
// Union Types
function padLeft(value, padding) {
    console.log(padding);
}
padLeft("string", 3);
padLeft("string", "string2");
const customer = {
    email: "mail@test.com",
    phone: "0984727323",
    name: "test",
    credit: 33,
};
const intersectionArgFunction = (customer) => {
    console.log(customer.email);
};
exports.intersectionArgFunction = intersectionArgFunction;
