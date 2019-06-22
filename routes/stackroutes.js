const { Stack } = require('../models')
const axios = require('axios')
const cheerio = require('cheerio')
module.exports = app => {

  //stack routes here
  app.get('/scrape', (req, res) => {
    axios.get('http://stackoverflow.com')
      .then(({ data }) => {
        const $ = fcheerio.load(data)
        //Grab all divs with class summary and loop
        $('div.summmary').each((i, elem) => {
          //find a tag and log out text 
          Stack.create({
            title: $(elem).children('h3').children('a').text(),
            link: `http://stackoverflow.com${$(elem).children('h3').children('a').attr('href')}`,
            favorite: false
          })
        })
        res.sendStatus(200)
      })
      .catch(e => console.log(e))
  })

  //Get all stcks
  app.get('/stacks', (req, res) => {
    Stack.find({})
      .then(stacks => res.json(stacks))
      .catch(e => console.log(e))
  })

  //Find where boolean is true
  app.get('/favorites', (req, res) => {
    Stack.find({ favorite: true })
      .then(stacks => res.json(stacks))
      .catch(e => console.log(e))
  })

  //Update for when it is  a favorite
  app.put('/stacks/:id', (req, res) => {
    //set favorite to true 
    Stack.findByIdandUpdate(req.params.id, { favorite: true })
  })


}