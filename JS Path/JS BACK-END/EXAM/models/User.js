const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        min: 0,
        default: 0,
    },
    expenses: [{
        type: mongoose.Types.ObjectId,
        ref: 'Expense'
    }],
});

module.exports = mongoose.model('User', userSchema);