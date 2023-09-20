const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.get('/', (_req, res) => {
    res.status(200).send('Welcome to the payment system')
})
app.get('/cart/:id', (req, res) => {
        if (typeof req.params.id === Number) {
    res.status(200).send(`Payment methods for cart ${req.params.id}`)
        } else {
    res.statusCode = 400
        }
})
app.get('/available_payments', (_req, res) => {
    res.status(200).json({
  "payment_methods": {
    "credit_cards": true,
    "paypal": false
  }
})
})
app.post('/login', (req, res) => {
    const user = req.body.userName;
    if (user) {
        res.send(`Welcome ${user}`)
    } else {
        res.statusCode = 400
    }

})
app.listen(7865, () => {
    console.log('API available on localhost port 7865')
})
module.exports = app
