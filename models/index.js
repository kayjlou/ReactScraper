const { Schema, model } = require('mongoose')

const db = {
  Stack: require('./Stack.js')(Schema, model)
}
db.Stack.find()

module.exports = db