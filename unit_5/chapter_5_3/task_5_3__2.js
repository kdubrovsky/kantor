// Check for spam

// Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.
// The function must be case-insensitive

// https://javascript.info/task/check-spam

const checkSpam = str => {

    const loweredStr = str.toLowerCase();
    return loweredStr.includes('viagra') || loweredStr.includes('xxx');

}

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));