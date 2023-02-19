// Repeat until the input is a number

// Create a function readNumber which prompts for a number 
// until the visitor enters a valid numeric value.

// The resulting value must be returned as a number.
// The visitor can also stop the process by entering an empty line or pressing “CANCEL”. 
// In that case, the function should return null.

// https://javascript.info/task/repeat-until-number

function readNumber() {

    let num;

    do {
        num = prompt('Enter any number or empty line to stop', 0);
    } while (!isFinite(num));

    if (num === null || num === '') return null;

    return num;

}

alert(`Number is ${readNumber()}`);
