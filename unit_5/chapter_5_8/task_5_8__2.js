// Store read dates

// There’s an array of messages as in the previous task. The situation is similar.
// The question now is: which data structure you’d suggest to store the information: “when the message was read?”.
// In the previous task we only needed to store the “yes/no” fact.
// Now we need to store the date, and it should only remain in memory until the message is garbage collected.

// P.S. Dates can be stored as objects of built-in Date class, that we’ll cover later.

// https://javascript.info/task/recipients-when-read

let messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
];

let readMap = new WeakMap();

readMap.set(messages[0], new Date(2023, 1, 1));