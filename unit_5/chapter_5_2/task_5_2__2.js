// Why 6.35.toFixed(1) == 6.3?

// According to the documentation Math.round and toFixed both round to the nearest number: 0..4 lead down while 5..9 lead up.

// https://javascript.info/task/why-rounded-down

// For instance:

console.log(1.35.toFixed(1)); // 1.4

// In the similar example below, why is 6.35 rounded to 6.3, not 6.4?

console.log(6.35.toFixed(1)); // 6.3


// ANSWER

// Internally the decimal fraction 6.35 is an endless binary.
// As always in such cases, it is stored with a precision loss.

console.log(6.35.toFixed(20));  // 6.34999999999999964473

// How to round 6.35 the right way?

// ANSWER

console.log(Math.round(6.35 * 10) / 10);