// Create a calculator

// Create an object calculator with three methods:

// read() prompts for two values and saves them as object properties with names a and b respectively.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.

// https://javascript.info/task/calculator


let calculator = {

    read() {
        this.a = +prompt('Enter A', 0);
        this.b = +prompt('Enter B', 0);
    },

    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    }

};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());