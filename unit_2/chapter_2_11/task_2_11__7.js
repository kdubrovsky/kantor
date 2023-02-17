// Check the range outside

// Write an if condition to check that age is NOT between 14 and 90 inclusively.
// Create two variants: the first one using NOT !, the second one – without it.

// https://javascript.info/task/check-if-out-range


let age = 96;

if (!(age >= 14 && age <= 90)) console.log('The age is NOT in the range 14–90 inclusively');
if (age < 14 || age > 90) console.log('The age is NOT in the range 14–90 inclusivel (AGAIN)');