// Uppercase const?

// Examine the following code:

// const birthday = '18.04.1982';
// const age = someCode(birthday);

// Here we have a constant birthday for the date, and also the age constant.

// The age is calculated from birthday using someCode(),
// which means a function call that we didn’t explain yet (we will soon!),
// but the details don’t matter here, the point is that age is calculated
// somehow based on the birthday.
// Would it be right to use upper case for birthday? For age? Or even for both?

// https://javascript.info/task/uppercast-constant

const BIRTHDAY = '18.04.1982';

const getAge = (birthDateString) => {

    const DAYS_IN_MONTHES = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const MONTHES_IN_YEAR = 12;

    const [birthDate, birthMonth, birthYear] = birthDateString.split('.');

    const current = new Date();
    let currentDate = current.getDate();
    let currentMonth = current.getMonth() + 1;
    let currentYear = current.getFullYear();


    if (birthDate > currentDate) {
        currentDate += DAYS_IN_MONTHES[currentMonth - 1];
        currentMonth--;
    }

    if (birthMonth > currentMonth) {
        currentMonth += MONTHES_IN_YEAR;
        currentYear--;
    }

    const age = currentYear - birthYear;
    return age > 0 ? age : 0;


}

console.log(getAge(BIRTHDAY));