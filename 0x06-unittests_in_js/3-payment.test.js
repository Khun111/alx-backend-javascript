const Utils = require('./utils')
const sendPaymentRequestToApi = require('./3-payment')
const sinon = require('sinon')

describe('sendPaymentRequestToApi', () => {
const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
const consoleSpy = sinon.spy(console, 'log')
afterEach(() => {
calculateNumberSpy.restore()
consoleSpy.restore()
        })
it(' should make sure the math used for sendPaymentRequestToApi is the same as calculateNumber', () => {
sendPaymentRequestToApi(100, 20)

sinon.assert.calledWithExactly(calculateNumberSpy, 'SUM', 100, 20)
sinon.assert.calledWithExactly(consoleSpy, 'The total is: 120')
        })
        })
