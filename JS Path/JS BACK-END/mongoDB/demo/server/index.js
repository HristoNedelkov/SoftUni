const { static, application } = require('express');
const express = require('express');
const {port} = require('./config')
const {addCat, allCats} = require('../src/count.js');
const handlebars = require('express-handlebars');


const app = express()
app.use(express.static('public'))
app.engine('handlebars', handlebars())
app.set('view engine', 'handlebars');

app.get('/',(req,res)=> {
  let name = 'icko'
  allCats().then(result=> {
   result =  result.map(el => `${el.name} is ${el.age} years old!`)
    console.log(result)  
    res.render('home', {name,result})
  })
})
app.get('/api/:name/:age',function(req,res) {
   let p = req.params
    console.log(p)
    res.redirect('/')
    res.end()

    addCat(p)
    allCats()
})

app.listen(port, (e) => {
    if(e) return console.log(e)
    console.log('Server is listening on port: '+ port+'...')
})