// Shuffle an array

// Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.
// Multiple runs of shuffle may lead to different orders of elements.

// All element orders should have an equal probability.
// For instance, [1,2,3] can be reordered as [1,2,3] or [1,3,2] or [3,1,2] etc,
// with equal probability of each case.

// https://javascript.info/task/shuffle

// https://en.wikipedia.org/wiki/Fisher–Yates_shuffle 

function shuffle(arr) {

    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // find random item before current to swap with current
        [arr[i], arr[j]] = [arr[j], arr[i]];  // swap elements
    }
}

let array = [1, 2, 3];
shuffle(array);
console.log(array);