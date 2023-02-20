// Sort in decreasing order

// https://javascript.info/task/sort-back


const sortBack = arr => arr.sort((a, b) => b - a)

let arr = [5, 2, 1, -10, 8];
sortBack(arr);


console.log(arr);