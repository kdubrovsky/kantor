// Output a single-linked list in the reverse order

// https://javascript.info/task/output-single-linked-list-reverse

// Output a single-linked list from the previous task in the reverse order.
// Make two solutions: using a loop and using a recursion.


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


// recursively list sequential reverse output

function printReverseListRecursively(list) {
    if (list.next)
        printReverseListRecursively(list.next);
    console.log(list.value)
}



// list sequential reverse output by loop

function printReverseListByLoop(list) {

    let arr = [];
    let item = list;

    while (item) {
        arr.push(item.value);
        item = item.next;
    };
    const l = arr.length;
    for (let i = 0; i < l; i++) {
        console.log(arr.pop())
    }
}

printReverseListRecursively(list);
printReverseListByLoop(list);