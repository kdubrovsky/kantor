// Turn the object into JSON and back

// Turn the user into JSON and then read it back into another variable.

// https://javascript.info/task/serialize-object

let user = {
    name: "John Smith",
    age: 35
};

let newUser = JSON.parse(JSON.stringify(user));

console.log(newUser);