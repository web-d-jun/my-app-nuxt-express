const express = require('express')
const app = express()

app.get('/', (req, res, next) => {
  res.send('훌륭해요! ' + Math.random())
})
app.use('/hello', require('./hello'))


module.exports = {
  path: '/api',
  handler: app
}
