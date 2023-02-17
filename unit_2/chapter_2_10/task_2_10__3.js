// Show the sign

// Using if..else, write the code which gets a number via prompt and then shows in alert:

// 1, if the value is greater than zero,
// -1, if less than zero,
// 0, if equals zero.

// In this task we assume that the input is always a number.

// https://javascript.info/task/sign

const userInput = prompt('Type a number', 0);

if (userInput > 0)
    alert(1);
else
    if (userInput < 0)
        alert(-1);
    else
        alert(0);