// Show a weekday

// Write a function getWeekDay(date) to show the weekday in short format: ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.

// https://javascript.info/task/get-week-day

let date = new Date(2023, 1, 20);  // 20 Feb 2023

const getWeekDay = (date) => {

    const DAY_NAMES = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
    return DAY_NAMES[date.getDay()];
}

console.log(getWeekDay(date));        // should output "TU"