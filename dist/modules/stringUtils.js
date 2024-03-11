"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalize = void 0;
const capitalize = (str) => {
    return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
};
exports.capitalize = capitalize;
