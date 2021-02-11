const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 3;
let secretWord = 'somesecret'

const register = async (data) => {
    let salt = await bcrypt.genSalt(saltRounds)

    if (data.password !== data.repeatPassword) {
        throw new Error('Passwords missmatch!')
    }
    let hash = await bcrypt.hash(data.password, salt)
    const user = new User({ username: data.username, password: hash })

    console.log(user)
    return await user.save()
}

const login = async ({ username, password }) => {
    //get user from DB
    let user = await User.findOne({ username }).lean()
    if (!user) throw { message: 'User not found!' };

    // comapare pass with hash
    let isIdentical = await bcrypt.compare(password, user.password)
    if (!isIdentical) throw { message: 'Wrong PASSWORD!' }
    let token = jwt.sign({ _id: user._id }, secretWord)

    return token

    // generate token


}

module.exports = {
    register,
    login,

}