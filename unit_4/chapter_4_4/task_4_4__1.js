// Using "this" in object literal

// Here the function makeUser returns an object.

// What is the result of accessing its ref? Why?

// https://javascript.info/task/object-property-this

"use strict";

function makeUser() {
    return {
        name: "John",
        ref: this
    };
}

let user = makeUser();

console.log(user.ref.name); // TypeError: undefined is not an object (evaluating 'user.ref.name')