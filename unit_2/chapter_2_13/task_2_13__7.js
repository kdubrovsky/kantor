// Output prime numbers

// Write the code which outputs prime numbers in the interval from 2 to n.

// https://javascript.info/task/list-primes

const range = 1000;

outerloop:
for (let i = 2; i <= range; i++) {

    for (let j = 2; j < Math.sqrt(i); j++)
        if (!(i % j)) continue outerloop;

    console.log(i);

}