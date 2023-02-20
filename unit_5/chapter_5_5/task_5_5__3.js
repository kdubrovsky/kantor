// Filter range "in place"
// importance: 4
// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

// The function should only modify the array. It should not return anything.

// https://javascript.info/task/filter-range-in-place

const filterRangeInPlace = (arr, min, max) => {

    for (let i = 0; i < arr.length; i++) {

        const value = arr[i];

        if (value < min || value > max) {
            arr.splice(i, 1);
            i--;
        }
    }
}


// check

let arr = [5, 3, 8, 1];

console.log(arr);
filterRangeInPlace(arr, 1, 4);
console.log(arr);
