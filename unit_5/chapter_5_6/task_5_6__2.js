// Filter range

// Write a function filterRange(arr, a, b) that gets an array arr,
// looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

// The function should not modify the array. It should return the new array.

// https://javascript.info/task/filter-range

const filterRange = (arr, min, max) =>
    arr.filter(item => !(item < min || item > max));


// check

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);

console.log(filtered);
console.log(arr);
