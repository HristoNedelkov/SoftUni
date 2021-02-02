const mongoose = require('../node_modules/mongoose');

const catSchema = new mongoose.Schema({
    name: String,
    age: Number
    // breed: String,
    // owner: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Person'
    // }
});

module.exports = mongoose.model('Cats', catSchema);