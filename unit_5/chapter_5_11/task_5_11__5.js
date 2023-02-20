// Last day of month?

// Write a function getLastDayOfMonth(year, month) that returns the last day of month.
// Sometimes it is 30th, 31st or even 28/29th for Feb.

// https://javascript.info/task/last-day-of-month

const getLastDayOfMonth = (year, month) =>
    (new Date(year, month + 1, 0))          // 0 day returns last day of previous month
        .getDate();


// check

console.log(getLastDayOfMonth(2012, 0)); // 31
console.log(getLastDayOfMonth(2012, 1)); // 29
console.log(getLastDayOfMonth(2013, 1)); // 28