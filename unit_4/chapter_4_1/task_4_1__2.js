// Check for emptiness
// importance: 5
// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

// https://javascript.info/task/is-empty

const isEmpty = obj => Object.keys(obj).length === 0;

let schedule = {};
console.log(isEmpty(schedule)); // true

schedule["8:30"] = "get up";
console.log(isEmpty(schedule)); // false