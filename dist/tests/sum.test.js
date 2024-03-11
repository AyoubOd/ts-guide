"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const advancedTypes_1 = require("../advancedTypes");
const globals_1 = require("@jest/globals");
const customer = {
    email: "mail@test.com",
    phone: "0984727323",
    name: "test",
    credit: 33,
};
(0, globals_1.test)("intersectionArgFunction", () => {
    (0, globals_1.expect)((0, advancedTypes_1.intersectionArgFunction)(customer)).toBe(undefined);
});
