// A question about "if"

// Which of these alerts are going to execute?
// What will the results of the expressions be inside if(...)?

// https://javascript.info/task/if-question


if (-1 || 0) console.log('first');
if (-1 && 0) console.log('second');
if (null || -1 && 1) console.log('third');

// first (-1 is truthy)
// ----- (second statement is falsy)
// third (-1 and 1 are both truthy)