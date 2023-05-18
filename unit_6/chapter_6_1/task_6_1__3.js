// Fibonacci numbers

// https://javascript.info/task/fibonacci-numbers

// The sequence of Fibonacci numbers has the formula Fn = Fn-1 + Fn-2. In other words, the next number is a sum of the two preceding ones.

// First two numbers are 1, then 2(1+1), then 3(1+2), 5(2+3) and so on: 1, 1, 2, 3, 5, 8, 13, 21....

// Fibonacci numbers are related to the Golden ratio and many natural phenomena around us.

// Write a function fib(n) that returns the n-th Fibonacci number.


// recursive algorithm (slow)

function fibRecursive(n) {
    return (n < 3) ? 1 : fibRecursive(n - 1) + fibRecursive(n - 2);
}

// dynamic bottom-up algorithm (fast)

function fibDynamic(n) {
    if (n < 3) {
        return 1;
    }
    else {
        let a = b = 1;
        for (i = 3; i <= n; i++) {
            const c = a + b;
            [a, b] = [b, c];
        }
        return b;
    }
}

console.log(fibRecursive(20));
console.log(fibDynamic(20));