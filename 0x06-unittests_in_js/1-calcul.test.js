const calculateNumber = require("./1-calcul.js");
const assert = require('assert')
const {describe, it} = require('mocha')

describe('calculateNumber', () => {
        it('should sum up numbers when type is SUM', () => {
        assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6)
                })
        it('should subtract numbers when type is SUBTRACT', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4)
                })
        it('should divide numbers when type is DIVIDE', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2)
                })
        it('should return undefined when invalid type is passed', () => {
        assert.strictEqual(calculateNumber('DIVIDED', 1.4, 4.5), undefined)
                })
        it('should return error when type is DIVIDE and b is zero', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error')
                })
        })
