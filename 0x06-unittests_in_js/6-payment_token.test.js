const getPaymentTokenFromAPI = require('./6-payment_token')
const { expect } = require('chai')

describe('getPaymentTokenFromAPI', () => {
    it('should return success message if success is true', (done) => {
        getPaymentTokenFromAPI(true).then((data) => {
        expect(data).to.deep.equal({data: 'Successful response from the API' })
        done()
    }).catch(error => done(error))
    })
})
