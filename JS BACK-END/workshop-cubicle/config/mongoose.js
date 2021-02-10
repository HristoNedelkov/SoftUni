const { MongooseDocument, Mongoose } = require("mongoose");

const mongoose = require('mongoose');

const uri = (name) => `mongodb+srv://icko:ickocluster0@cluster0.jrp36.mongodb.net/${name}?retryWrites=true&w=majority`;
mongoose.connect(uri('ckuster0'), { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useFindAndModify', false);
const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error: '))
db.once('open', console.log.bind(console, 'DB Connected! '))
 