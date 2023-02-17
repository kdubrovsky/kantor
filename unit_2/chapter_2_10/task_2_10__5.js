// Rewrite 'if..else' into '?'

// Rewrite if..else using multiple ternary operators '?'.
// For readability, it’s recommended to split the code into multiple lines.

// https://javascript.info/task/rewrite-if-else-question


let login = ''
let message;

if (login == 'Employee') {
    message = 'Hello';
} else if (login == 'Director') {
    message = 'Greetings';
} else if (login == '') {
    message = 'No login';
} else {
    message = '';
}

let altMessage =
    login == 'Employee' ? 'Hello' :
        login == 'Director' ? 'Greetings' :
            login == '' ? 'No login' :
                '';


console.log(message);
console.log(altMessage);