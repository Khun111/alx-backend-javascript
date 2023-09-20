const chai = require('chai')
const request = require('request')
const app = require('./api')
const { expect } = chai

describe('Index Page', () => {
    it('should return the correct status code', (done) => {
        request.get('http://localhost:7865', (error, response, body) => {
            expect(response.statusCode).to.equal(200)
            done()
        })
    })
    it('should return the correct message', (done) => {
        request.get('http://localhost:7865', (error, response, body) => {
            expect(body).to.equal('Welcome to the payment system')
            done()
        })
    })
    it('should return the correct status code', (done) => {
        request.get('http://localhost:7865/cart/12', (error, response, body) => {
            expect(response.statusCode).to.equal(200)
            done()
        })
})
