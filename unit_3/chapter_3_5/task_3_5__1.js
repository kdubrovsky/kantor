// What's wrong in the test?

// What’s wrong in the test of pow below?

// https://javascript.info/task/pow-test-wrong

it("Raises x to the power n", function () {
    let x = 5;

    let result = x;
    assert.equal(pow(x, 1), result);

    result *= x;
    assert.equal(pow(x, 2), result);

    result *= x;
    assert.equal(pow(x, 3), result);
});

// We have to create more indepedent tests to make them more flexible. For example:


describe("Raises x to power n", function () {
    it("5 in the power of 1 equals 5", function () {
        assert.equal(pow(5, 1), 5);
    });

    it("5 in the power of 2 equals 25", function () {
        assert.equal(pow(5, 2), 25);
    });

    it("5 in the power of 3 equals 125", function () {
        assert.equal(pow(5, 3), 125);
    });
});
