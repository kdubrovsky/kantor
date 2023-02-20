// Store "unread" flags
// There’s an array of messages

let messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
];

let readMessages = new WeakSet();

// Two messages were read
readMessages.add(messages[0]);
readMessages.add(messages[1]);
// readMessages consists 2 elements


// Read the fisrt message again
readMessages.add(messages[0]);
// readMessages still consists 2 elements 


console.log("Read message 0: " + readMessages.has(messages[0])); // true

messages.shift();
// readMessages still consists 1 element (eventually)


// https://javascript.info/task/recipients-read

// Your code can access it, but the messages are managed by someone else’s code.
// New messages are added, old ones are removed regularly by that code, and you don’t know the exact moments when it happens.
// Now, which data structure could you use to store information about whether the message “has been read”?
// The structure must be well-suited to give the answer “was it read?” for the given message object.

// P.S. When a message is removed from messages, it should disappear from your structure as well.
// P.P.S. We shouldn’t modify message objects, add our properties to them.
// As they are managed by someone else’s code, that may lead to bad consequences.