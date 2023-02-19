// Sum input numbers

// Write the function sumInput() that:

// Asks the user for values using prompt and stores the values in the array.
// Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
// Calculates and returns the sum of array items.
// P.S. A zero 0 is a valid number, please don’t stop the input on zero.

// https://javascript.info/task/array-input-sum


const sumInput = () => {

    const numbers = [];
    let sum = 0;

    while (true) {

        let value = prompt("Input a number", 0);
        if (value === "" || value === null || !isFinite(value)) break; // check number

        numbers.push(+value);
    }

    for (const number of numbers)
        sum += number;

    return sum;
}

alert(sumInput()); 
