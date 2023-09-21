const { expect } = require('chai')
const request = require('request')


describe('Index Page', () => {
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
            expect(response.statusCode).to.equal(404)
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
describe('Test payments endpoint', () => {
    it('should return the correct message for payments', (done) => {
        request('http://localhost:7865/available_payments', (error, response, body) => {
            expect(JSON.parse(body)).to.deep.equal({
  "payment_methods": {
    "credit_cards": true,
    "paypal": false
}   
})
done()
})
    })
    it('should return the correct status code for payments', (done) => {
        request('http://localhost:7865/available_payments', (error, response, body) => {
            expect(response.statusCode).to.equal(200)
            done()
})
    })
})

describe('Test login endpoint', () => {
    it('return the correct message for login', (done) => {
        request({
            url: 'http://localhost:7865/login',
            method: 'POST',
            body: {"userName": "Betty"},
            json: true
        }, (error, response, body) => {
            expect(body).to.equal('Welcome Betty')
        })
        done()
    })
    it('return the correct status code', (done) => {
        request({
            url: 'http://localhost:7865/login',
            method: 'POST',
            body: {"userName": "Betty"},
            json: true
        }, (error, response, body) => {
            expect(response.statusCode).to.equal(200)
        })
        done()
    })
    it('return the correct message for login with wrong data', (done) => {
        request({
            url: 'http://localhost:7865/login',
            method: 'POST',
            body: {"user": "Betty"},
            json: true
        }, (error, response, body) => {
            expect(response.statusCode).to.equal(400)
        })
        done()
    })
})
