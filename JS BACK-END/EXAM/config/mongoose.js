const { DB_CONNECTION } = require('../config/index');//ADD THE LOCAL DB NAME
const mongoose = require('mongoose');

let dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}

mongoose.connect(DB_CONNECTION, dbOptions);
const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error: '))
db.once('open', console.log.bind(console, 'DB is Connected! '))
