"use strict";
function updateTodo(todo, fieldsToUpdate) {
    return Object.assign(Object.assign({}, todo), fieldsToUpdate);
}
const todo = {
    title: "hello",
    description: "desc",
};
