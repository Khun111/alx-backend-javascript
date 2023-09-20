const request = require('request')
const app = require('./api')
const { expect } = require('chai')

describe('Test index Page', () => {
    it('should return the correct status code', (done) => {
        request.get('http://localhost:7865', (error, response, body) => {
            expect(response.statusCode).to.equal(200)
        })
        done()
    })
    it('should return the correct message', (done) => {
        request.get('http://localhost:7865', (error, response, body) => {
            expect(body).to.equal('Welcome to the payment system')
        })
        done()
    })
})

describe('Test cart page', () => {
    it('should return the correct status code for cart', (done) => {
        request.get('http://localhost:7865/cart/12', (error, response, body) => {
            expect(response.statusCode).to.equal(200)
        })
        done()
    })
    it('should return the correct status code for cart when arg is not number', (done) => {
        request.get('http://localhost:7865/cart/two', (error, response, body) => {
            expect(response.statusCode).to.equal(400)
        })
        done()
    })
    it('should return the correct message for cart', (done) => {
        request.get('http://localhost:7865/cart/12', (error, response, body) => {
            expect(body).to.equal('Payment methods for cart 12')
        })
        done()
    })
})