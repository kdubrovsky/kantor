// Can I add a string property?

// Consider the following code:

"use strict";

let str = "Hello";

str.test = 5;

console.log(str.test);

// What do you think, will it work? What will be shown?

// https://javascript.info/task/string-new-property


// Answer:

// 1) TypeError: Cannot create property 'test' on string 'Hello' in strict mode
// 2) undefined in normal mode

// Primitives are not real objects and can't store additional data

