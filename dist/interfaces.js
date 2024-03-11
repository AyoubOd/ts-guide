"use strict";
const createVehicule = (arg1) => {
    return arg1;
};
const updatePerson = (person, updates) => {
    return Object.assign(Object.assign({}, person), updates);
};
const moveCircle = (circle, updates) => {
    circle = Object.assign(Object.assign({}, circle), updates);
    return circle;
};
