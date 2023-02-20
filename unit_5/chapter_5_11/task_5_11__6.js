// How many seconds have passed today?

// Write a function getSecondsToday() that returns the number of seconds from the beginning of today.
// The function should work in any day. That is, it should not have a hard-coded value of “today”.

// https://javascript.info/task/get-seconds-today

const getSecondsToday = () => {
    let today = new Date();
    console.log(today);
    return today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds();
}


console.log(getSecondsToday());