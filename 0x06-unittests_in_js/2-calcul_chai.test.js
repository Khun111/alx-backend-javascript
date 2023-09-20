const calculateNumber = require("./1-calcul.js");
const { expect } = require('chai')
const { describe, it } = require('mocha')

describe('calculateNumber', () => {
        it('should sum up numbers when type is SUM', () => {
                expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6)
        })
        it('should subtract numbers when type is SUBTRACT', () => {
                expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4)
        })
        it('should divide numbers when type is DIVIDE', () => {
                expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2)
        })
        it('should return undefined when invalid type is passed', () => {
                expect(calculateNumber('DIVIDED', 1.4, 4.5)).to.equal(undefined)
        })
        it('should return error when type is DIVIDE and b is zero', () => {
                expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error')
        })
})
