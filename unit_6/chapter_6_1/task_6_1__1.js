// Sum all numbers till the given one

// https://javascript.info/task/sum-to

// Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.

// For instance:

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10

// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
// Make 3 solution variants:

// 1) Using a for loop.
// 3) Using a recursion, cause sumTo(n) = n + sumTo(n-1) for n > 1.
// 4) Using the arithmetic progression formula.

// P.S. Which solution variant is the fastest? The slowest? Why?
// P.P.S. Can we use recursion to count sumTo(100000)?


// loop solution (slow)

function loopSumTo(n) {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result += i;
    }
    return result;
}


// recursive solution (slowest)

function recursionSumTo(n) {
    return (n === 1) ? 1 : n + recursionSumTo(n - 1);
}


// math solution (fastest)

function mathSumTo(n) {
    return n * (n + 1) / 2;
}



// test

console.log(loopSumTo(100));
console.log(recursionSumTo(100)); // "RangeError: Maximum call stack size exceeded" for 100000 as parameter (Node 18.16)
console.log(mathSumTo(100));