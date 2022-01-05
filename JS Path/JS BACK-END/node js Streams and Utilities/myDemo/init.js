let names = []
let counter = 0
module.exports = {
    increse() {
        counter++
        return counter
    }, 

    addName(name) {
        if(names.includes(name)){
            return `Hi ${name}, you are already an user! :D`
        }
        names.push(name)
        return `Hey ${name} you are added to the list of users!`
    },

    showAll() {
        return names.join(' ')
    }
}  