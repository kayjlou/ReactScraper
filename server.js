const express = require('express')
const app = express()


app.use(express.urlencoded({ extended: true }))
app.use(express.json())

require('./routes')(app)



require('mongoose').connect('mongodb://localhost/reactdb', { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: true })
  .then(_ => app.listen(3001))
  .catch(e => console.log(e))




