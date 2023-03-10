// Replace "for" with "while"

// Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).

// https://javascript.info/task/replace-for-while

for (let i = 0; i < 3; i++) {
    console.log(`number ${i}!`);
}

// can be replaced with:

let i = 0;

while (i < 3) {
    console.log(`number ${i}!`);
    i++;
}