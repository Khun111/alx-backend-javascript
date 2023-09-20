const Utils = require('./utils')
const sendPaymentRequestToApi = require('./4-payment')
const sinon = require('sinon')

describe('sendPaymentRequestToApi', () => {
const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
const consoleSpy = sinon.spy(console, 'log')
afterEach(() => {
calculateNumberStub.restore()
consoleSpy.restore()
        })
it(' should make sure the math used for sendPaymentRequestToApi is the same as calculateNumber', () => {
sendPaymentRequestToApi(100, 20)

sinon.assert.calledWithExactly(calculateNumberStub, 'SUM', 100, 20)
        })
it(' should log expected output', () => {
sendPaymentRequestToApi(100, 20)
sinon.assert.calledWithExactly(consoleSpy, 'The total is: 10')
        })
        })
        