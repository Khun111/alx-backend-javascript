const express = require('express')
const app = express()

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
app.listen(7865, () => {
    console.log('API available on localhost port 7865')
})
module.exports = app
