const { MongooseDocument, Mongoose } = require("mongoose");
const {DB_CONNECTION} = require('../config/index')
const mongoose = require('mongoose');

mongoose.connect(DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useFindAndModify', false);
const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error: '))
db.once('open', console.log.bind(console, 'DB Connected! '))
 