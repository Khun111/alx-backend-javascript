const calculateNumber = require("./0-calcul.js");
const assert = require('assert')
const {describe, it} = require('mocha')

describe('calculateNumber', () => {
it('should return 4 when passed 1 and 3', () => {
assert.strictEqual(calculateNumber(1, 3), 4)
})
it('should return 5 when passed 1 and 3.7', () => {
assert.strictEqual(calculateNumber(1, 3.7), 5)
})
it('should return 5 when passed 1.2 and 3.7', () => {
assert.strictEqual(calculateNumber(1.2, 3.7), 5)
})
it('should return 6 when passed 1.5 and 3.7', () => {
assert.strictEqual(calculateNumber(1.5, 3.7), 6)
})
it('should return 1 when passed -3.9 and 4.5', () => {
assert.strictEqual(calculateNumber(-3.9, 4.5), 1)
})
it('should work fine if a number is passed as string', () => {
assert.strictEqual(calculateNumber('1', 3.7), 5)
})
it('should return NaN when passed an actual character', () => {
assert.strictEqual(calculateNumber('a', '3.9'), NaN)
})
it('should work fine with booleans', () => {
assert.strictEqual(calculateNumber(true, 3.7), 5)
})
it('should work fine with booleans', () => {
assert.strictEqual(calculateNumber(true, false), 1)
})
it('should return NaN when passed one arg', () => {
assert.strictEqual(calculateNumber(3.7), NaN)
})
it('should return NaN when no arg is passed', () => {
assert.strictEqual(calculateNumber(), NaN)
})

        })
