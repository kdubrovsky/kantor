// Iterable keys
// importance: 5
// We’d like to get an array of map.keys() in a variable and then apply array-specific methods to it, e.g. .push.

// But that doesn’t work
// Why? How can we fix the code to make keys.push work?

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys()); // map.keys() returns an iterable, but not an array, so we have to convert it

keys.push("more");