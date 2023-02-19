// Chaining

// There’s a ladder object that allows to go up and down:

// https://javascript.info/task/chain-calls

let ladder = {
    step: 0,
    up() {
        this.step++;
    },
    down() {
        this.step--;
    },
    showStep: function () { // shows the current step
        console.log(this.step);
    }
};

// Now, if we need to make several calls in sequence, can do it like this:

console.log('Old methods:')

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0

console.log('And the new methods:')

// Let's start new ladder function:

let ladderNew = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function () { // shows the current step
        console.log(this.step);
        return this;
    }
};


// Modify the code of up, down and showStep to make the calls chainable, like this:

ladderNew.up().up().down().showStep().down().showStep(); // shows 1 then 0