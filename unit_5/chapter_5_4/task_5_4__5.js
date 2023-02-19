// A maximal subarray

// The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].
// The task is to find the contiguous subarray of arr with the maximal sum of items.
// Write the function getMaxSubSum(arr) that will return that sum.

// https://javascript.info/task/maximal-subarray

const getMaxSubSum = (arr) => {

    let sum = 0;
    let current = 0;

    for (const item of arr) {
        current += item;
        sum = Math.max(sum, current); // remember the maximum
        if (current < 0) current = 0; // zero if negative
    }

    return sum;
}

// tests

console.log(getMaxSubSum([-1, 2, 3, -9])); // 5
console.log(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
console.log(getMaxSubSum([-2, -1, 1, 2])); // 3
console.log(getMaxSubSum([100, -9, 2, -3, 5])); // 100
console.log(getMaxSubSum([1, 2, 3])); // 6
console.log(getMaxSubSum([-1, -2, -3])); // 0