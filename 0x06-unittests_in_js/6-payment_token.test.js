const getPaymentTokenFromAPI = require('./6-payment_token')
describe('getPaymentTokenFromAPI', () => {
    it('should return success message if success is true', (done) => {
        getPaymentTokenFromAPI(true).then((data) => {
        expect(data).to.equal({data: 'Successful response from the API' })
    })
        done()
    })
})
