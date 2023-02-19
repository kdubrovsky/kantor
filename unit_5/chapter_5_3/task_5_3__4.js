// Extract the money

// We have a cost in the form "$120". That is: the dollar sign goes first, and then the number.
// Create a function extractCurrencyValue(str) that would
// extract the numeric value from such string and return it.

// https://javascript.info/task/extract-currency


const extractCurrencyValue = str =>
    +str.slice(1);

console.log(extractCurrencyValue('$120'));
console.log(extractCurrencyValue('$430'));