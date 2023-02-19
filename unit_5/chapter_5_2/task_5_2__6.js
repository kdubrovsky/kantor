// A random integer from min to max

// Create a function randomInteger(min, max) that generates a random integer number from min to max including both min and max as possible values.
// Any number from the interval min..max must appear with the same probability.

// https://javascript.info/task/random-int-min-max

const randomInteger = (min, max) =>
    Math.floor(min + Math.random() * (max - min + 1));

// Examples of its work:

console.log(randomInteger(1, 5));
console.log(randomInteger(1, 5));
console.log(randomInteger(1, 5));
