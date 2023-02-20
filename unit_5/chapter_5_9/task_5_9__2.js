// Count properties

// Write a function count(obj) that returns the number of properties in the object
// Try to make the code as short as possible.

// P.S. Ignore symbolic properties, count only “regular” ones.

// https://javascript.info/task/count-properties

const count = (obj) => Object.keys(obj).length;

let user = {
    name: 'John',
    age: 30
};

console.log(count(user)); // 2