const Expence = require('../models/Expense');
const User = require('../models/User');

function getAll(id) {
    let expences = Expence.find({ user: id }).lean();
    return expences;
}

async function getOne(id) {
    return await Expence.findById(id).lean();
}

async function  getUser(id) {
    return await User.findById(id).lean()

}
async function create(data, user) {
    if (data.report == 'on') {
        data.report = true
    }
    console.log(user)
    let expense = await new Expence({ ...data, user });

    let userDb = await User.findById(user)


    await userDb.expenses.push(expense)

    await userDb.save()
    return await expense.save()
}

async function addMoney(amountG, user) {
    let userDb = await User.updateOne({_id:user},{$inc: {amount:amountG}})
    return userDb
}


async function stop(id) {
    let expence = await Expence.findById(id)
    expence.report = false

    return await expence.save()
}
module.exports = {
    getAll,
    getOne,
    create,
    stop,
    addMoney,
    getUser,


}