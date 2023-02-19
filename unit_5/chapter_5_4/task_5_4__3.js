// Calling in an array context

// What is the result? Why?

// https://javascript.info/task/call-array-this

let arr = ["a", "b"];

arr.push(function () {
    console.log(this);
});

arr[2]();

// [ 'a', 'b', [Function (anonymous)] ]

// It works because arrrays are objects and it's ok to store function in them