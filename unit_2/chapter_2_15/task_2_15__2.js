// Rewrite the function using '?' or '||'

// The following function returns true if the parameter age is greater than 18.
// Otherwise it asks for a confirmation and returns its result.

// https://javascript.info/task/rewrite-function-question-or

function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return console.log('Did parents allow you?');
    }
}

// Rewrite it, to perform the same, but without if, in a single line.
// Make two variants of checkAge:

// 1. Using a question mark operator ?
// 2. Using OR ||

function checkAgeAlt1(age) {
    return (age > 18) ? true : console.log('Did parents allow you????????');
}

function checkAgeAlt2(age) {
    return (age > 18) || console.log('Did parents really allow you?');
}

checkAge(15);
checkAgeAlt1(15);
checkAgeAlt2(15);