// Filter unique array members

// Let arr be an array.
// Create a function unique(arr) that should return an array with unique items of arr.

// https://javascript.info/task/array-unique

const unique = arr => Array.from(new Set(arr));

let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(strings)); // Hare, Krishna, :-O