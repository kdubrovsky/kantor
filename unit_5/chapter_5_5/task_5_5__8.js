// Map to objects

// You have an array of user objects, each one has name, surname and id.
// Write the code to create another array from it, of objects with id and fullName,
// where fullName is generated from name and surname.

// So, actually you need to map one array of objects to another. Try using => here. There’s a small catch.

// https://javascript.info/task/map-objects

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

let usersMapped = users.map(user => (
    {
        fullName: `${user.name} ${user.surname}`,
        id: user.id
    }
));

console.log(usersMapped);