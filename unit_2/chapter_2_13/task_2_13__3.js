// Which values get shown by the "for" loop?

// For each loop write down which values it is going to show. Then compare with the answer.
// Both loops log same values or not?

// https://javascript.info/task/which-value-for

for (let i = 0; i < 5; i++) console.log(i);

// 0
// 1
// 2
// 3
// 4

for (let i = 0; i < 5; ++i) console.log(i);

// 0
// 1
// 2
// 3
// 4

// Increment and condition check are independent things