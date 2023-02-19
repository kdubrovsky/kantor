// A random number from min to max

// The built-in function Math.random() creates a random value from 0 to 1 (not including 1).
// Write the function random(min, max) to generate a random floating-point number from min to max (not including max).

// https://javascript.info/task/random-min-max

const random = (min, max) =>
    min + Math.random() * (max - min);

// Examples of its work:

console.log(random(1, 5));
console.log(random(1, 5));
console.log(random(1, 5));