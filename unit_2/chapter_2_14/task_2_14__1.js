// Rewrite the "switch" into an "if"

// Write the code using if..else which would correspond to the following switch

// https://javascript.info/task/rewrite-switch-if-else

let browser = 'Firefox';

switch (browser) {
    case 'Edge':
        console.log("You've got the Edge!");
        break;

    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        console.log('Okay we support these browsers too');
        break;

    default:
        console.log('We hope that this page looks ok!');
}

// if else version:

if (browser == 'Edge')
    console.log("You've got the Edge again!");
else
    if (browser == 'Chrome'
        || browser == 'Firefox'
        || browser == 'Safari'
        || browser == 'Opera')
        console.log('Okay we again support these browsers too');
    else
        console.log('We hope again that this page looks ok!');