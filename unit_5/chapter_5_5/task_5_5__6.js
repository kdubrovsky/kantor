// Create an extendable calculator

// Create a constructor function Calculator that creates “extendable” calculator objects.

// The task consists of two parts.

// 1) implement the method calculate(str) that takes a string like "1 + 2"
// in the format “NUMBER operator NUMBER” (space-delimited) and returns the result.
// Should understand plus + and minus -.

// 2) Then add the method addMethod(name, func) that teaches the calculator a new operation.
// It takes the operator name and the two-argument function func(a,b) that implements it.

// No parentheses or complex expressions in this task.
// The numbers and the operator are delimited with exactly one space.
// There may be error handling if you’d like to add it.

// https://javascript.info/task/calculator-extendable

function Calculator() {

    this.methods = {
        '-': (a, b) => a - b,
        '+': (a, b) => a + b,
    }

    this.calculate = function (str) {

        const split = str.split(' '),
            a = +split[0],
            b = +split[2],
            op = split[1];
        if (!this.methods[op] || isNaN(a) || isNaN(b)) return NaN;

        return this.methods[op](a, b);
    };

    this.addMethod = function (name, func) {
        this.methods[name] = func;
    };
}



let calc = new Calculator;

calc.addMethod("*", (a, b) => a * b);
calc.addMethod("/", (a, b) => a / b);
calc.addMethod("**", (a, b) => a ** b);

console.log(calc.calculate('3 + 7')); // 10
console.log(calc.calculate('2 ** 3')); // 8