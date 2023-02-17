// Rewrite 'if' into '?'

// Rewrite this if using the conditional operator '?':
// https://javascript.info/task/rewrite-if-question

let a = 1;
let b = 2;
let result;

if (a + b < 4) {
    result = 'Below';
} else {
    result = 'Over';
}

let alternateResult = (a + b < 4) ? 'Below' : 'Over';

console.log(result);
console.log(alternateResult);
