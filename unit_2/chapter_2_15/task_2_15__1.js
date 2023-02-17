// Is "else" required?

// The following function returns true if the parameter age is greater than 18.
// Otherwise it asks for a confirmation and returns its result:

// https://javascript.info/task/if-else-required

function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        // ...
        return console.log('Did parents allow you?');
    }
}

// Will the function work differently if else is removed?

function checkAgeAlt(age) {
    if (age > 18) {
        return true;
    }
    // ...
    return console.log('Did parents allow you?');
}

//  Is there any difference in the behavior of these two variants?
//  There is no difference:

checkAge(15);
checkAgeAlt(15);
