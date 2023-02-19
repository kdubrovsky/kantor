// Uppercase the first character

// Write a function ucFirst(str) that returns the string str with the uppercased first character.

// https://javascript.info/task/ucfirst

const ucFirst = str => !str ?
    str :
    str[0].toUpperCase() + str.slice(1);


ucFirst("john snow") == "John snow";

console.log(ucFirst("john snow"));