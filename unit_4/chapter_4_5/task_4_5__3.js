// Create new Accumulator

// Create a constructor function Accumulator(startingValue)

// Object that it creates should:

// Store the “current value” in the property value. The starting value is set to the argument of the constructor startingValue.
// The read() method should use prompt to read a new number and add it to value.
// In other words, the value property is the sum of all user-entered values with the initial value startingValue.

// https://javascript.info/task/accumulator


function Accumulator(startingValue) {

    this.value = startingValue;

    this.read = function () {
        this.value += +prompt('How much to add? ', 0);
    };

    this.show = function () {
        alert(this.value);
    }

}

const accumulator = new Accumulator(100);

accumulator.read();
accumulator.read();
accumulator.show();