// Rewrite "if" into "switch"

// Rewrite the code below using a single switch statement:

// https://javascript.info/task/rewrite-if-switch

let a = Math.floor(Math.random() * 4)

if (a == 0) {
    console.log(0);
}
if (a == 1) {
    console.log(1);
}

if (a == 2 || a == 3) {
    console.log('2,3');
}

// same code with switch:

switch (a) {
    case 0:
        console.log(0);
        break;

    case 1:
        console.log(1);
        break;

    case 2:
    case 3:
        console.log('2,3');
        break;

}