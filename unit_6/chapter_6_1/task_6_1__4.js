// Output a single-linked list

// https://javascript.info/task/output-single-linked-list

// Let’s say we have a single-linked list:

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

// Write a function printList(list) that outputs list items one-by-one.

// Make two variants of the solution: using a loop and using recursion.
// What’s better: with recursion or without it?


// recursively list sequential output (more beautiful and clear)

function printListRecursively(list) {
    console.log(list.value)
    if (list.next)
        printListRecursively(list.next);
}


// list sequential output by loop (loop does not spend resources for nested function calls.)

function printListByLoop(list) {
    let item = list;
    while (item) {
        console.log(item.value);
        item = item.next;
    };
}

printListRecursively(list);
printListByLoop(list);