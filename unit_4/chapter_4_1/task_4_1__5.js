// Multiply numeric property values by 2

// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.
// Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.

// P.S. Use typeof to check for a number here.

// https://javascript.info/task/multiply-numeric

const multiplyNumeric = obj => {
    for (const key in obj)
        if (obj[key] === 'number')
            obj[key] *= 2;
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);
console.log(menu);