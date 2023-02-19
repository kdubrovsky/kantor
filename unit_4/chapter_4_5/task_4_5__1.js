// Two functions – one object

// Is it possible to create functions A and B so that new A() == new B()?
// If it is, then provide an example of their code.

// https://javascript.info/task/two-functions-one-object

const obj = {}; // external for A and B 

function A() { return obj; }
function B() { return obj; }

let a = new A();
let b = new B();

console.log(a == b); // true

