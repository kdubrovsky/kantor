// What's the result of OR'ed alerts?

// What is the code below going to output?
// https://javascript.info/task/alert-null-2-undefined


console.log(console.log(1) || 2 || console.log(3));

// console.log doesn't return anything (undefined)

// 1 (console.log(1))
// the first truthy value is 2
// exit logical expression
// 2 (outer console.log)


// Summary:
// 1
// 2

