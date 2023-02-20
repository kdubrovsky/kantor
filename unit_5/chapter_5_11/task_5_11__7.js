// How many seconds till tomorrow?

// Create a function getSecondsToTomorrow() that returns the number of seconds till tomorrow.

// https://javascript.info/task/get-seconds-to-tomorrow


const getSecondsToTomorrow = () => {

    let TOTAL_DAY_SECONDS = 86400;

    let now = new Date();

    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let totalSecondsToday = (hour * 60 + minutes) * 60 + seconds;

    return TOTAL_DAY_SECONDS - totalSecondsToday;
}

console.log(getSecondsToTomorrow());