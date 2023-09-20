const Utils = require('./utils')
const sendPaymentRequestToAPI = require('./5-payment')
const sinon = require('sinon')
const {expect} = require('chai')

describe('sendPaymentRequestToAPI', () => {
    let calculateNumberSpy
    let consoleStub
beforeEach(() => {
    calculateNumberSpy = sinon.spy(Utils, 'calculateNumber')
    consoleStub = sinon.stub(console, 'log')
})
afterEach(() => {
    calculateNumberSpy.restore()
    consoleStub.restore()
})
it('should call sendPaymentRequestToAPI with 100, and 20', () => {
    sendPaymentRequestToAPI(100, 20);
    expect(calculateNumberSpy.calledOnceWith('SUM', 100, 20))
    expect(consoleStub.calledOnceWith('The total is: 120'))
})
it('should call sendPaymentRequestToAPI with 10, and 10', () => {
    sendPaymentRequestToAPI(10, 10);
    expect(calculateNumberSpy.calledOnceWith('SUM', 10, 10))
    expect(consoleStub.calledOnceWith('The total is: 20'))
})
})