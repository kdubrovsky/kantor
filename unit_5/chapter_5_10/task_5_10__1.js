// Destructuring assignment

// https://javascript.info/task/destruct-user

// We have an object:

let user = {
    name: "John",
    years: 30
};

// Write the destructuring assignment that reads:

// name property into the variable name.
// years property into the variable age.
// isAdmin property into the variable isAdmin (false, if no such property)

let { name, years: age, isAdmin = false } = user;

console.log(name); // John
console.log(age); // 30
console.log(isAdmin); // false

// https://javascript.info/task/destruct-user