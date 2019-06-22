const { Schema, model } = require('mongoose')

module.exports = (Schema, model) => model('Stack',
  newSchema({


    title: String,
    link: String,
    favorite: Boolean


  }))