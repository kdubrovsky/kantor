// Translate border-left-width to borderLeftWidth

// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.
// P.S. Hint: use split to split the string into an array, transform it and join back.

// https://javascript.info/task/camelcase


const camelize = (str) => str
    .split('-')
    .map((word, i) =>
        i == 0
            ? word
            : word[0].toUpperCase() + word.slice(1))
    .join('');


console.log(camelize('background-color'));
console.log(camelize('list-style-image'));
console.log(camelize('-webkit-transition'));