const getPaymentTokenFromAPI = require('./6-payment_token')
const sinon =require('sinon')
describe('getPaymentTokenFromAPI', (done) => {
    it('should return success message if success is true', () => {
        getPaymentTokenFromAPI(true).then((data) => {
        expect(data).to.equal({data: 'Successful response from the API' })
        done()
    })
    })
})