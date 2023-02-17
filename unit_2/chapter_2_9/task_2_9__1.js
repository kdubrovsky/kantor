// Comparisons

// What will be the result for these expressions?
// https://javascript.info/task/comparison-questions

console.log(5 > 4);                     // true
console.log("apple" > "pineapple");     // false ('a' < 'p')
console.log("2" > "12");                // true (string type, '2' > '1')
console.log(undefined == null);         // true
console.log(undefined === null);        // false
console.log(null == "\n0\n");           // false
console.log(null === +"\n0\n");         // false (null === 0)