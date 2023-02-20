// Create a date

// Create a Date object for the date: Feb 20, 2012, 3:12am. The time zone is local.
// Show it.

// https://javascript.info/task/new-date

let date = new Date(Date.UTC(
    2012,   // year
    1,      // month (0,1,2...)
    20,     // date
    3,      // hours
    12));    // minutes


console.log(date);