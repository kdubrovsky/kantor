// The name of JavaScript

// Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’
// If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”

// https://javascript.info/task/check-standard 

let userInput = prompt('What is the "official" name of JavaScript?', '');

if (userInput == 'ECMAScript')
    alert('Right!');
else
    alert("You don't know? ECMAScript!");