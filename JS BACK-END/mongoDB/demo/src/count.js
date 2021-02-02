const mongoose = require('../node_modules/mongoose');
const Person = require('./Person');
const Cats = require('./Cats')
const uri = 'mongodb://localhost:27017/catshelter';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to database!');
});

function addCat(obj) {
    let Cat = new Cats(obj)
    Cat.save((e,res)=> {
        if(e) return console.log(e)
        console.log(res)
    })
        
}

async function allCats() {
  
    let names = await Cats.find({},{ _id:0, name: 1, age: 1 });
  return names
}


 module.exports = {
     allCats,
    addCat
 }
