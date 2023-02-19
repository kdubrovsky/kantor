// An occasional infinite loop

// This loop is infinite. It never ends. Why?

// https://javascript.info/task/endless-loop-error

let i = 0;
while (i != 10) {
  i += 0.2;
}

// precision loss factor —> i never would be equal to 10

