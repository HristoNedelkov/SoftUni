let obj = {
    VE: "Very Easy",
    EA: "Easy",
    ME: "Medium",
    HA: "Hard",
    VH: "Very Hard",
    EX: "Expert",
}
let obj2 = {
    VE: 5,
    EA: 10,
    ME: 20,
    HA: 40,
    VH: 80,
    EX: 120,
}

class Challenge {
    constructor(id, level) {
        this.id = id;
        this.level = level
        this.points = obj2[this.level] 
    }
}

class User {
    constructor(name,xp,log) {
        this.name = name;
        this.xp = xp;
        this.log = log;
    }
    newSolvedChallenge(challenge) {
        this.xp += challenge.points()
        this.log.push(challenge.id)
    }
}

let user1 = new User('Madam',165,[1,4,6])
let user2 = new User('Steve',110,[5,3,2])
let challenge1 = new Challenge(1, 'VE')
let challenge2 = new Challenge(2, 'EA')
let challenge3 = new Challenge(3, 'ME')
let challenge4 = new Challenge(4, 'HA')
let challenge5 = new Challenge(5, 'VH')
let challenge6 = new Challenge(6, 'EX')


// 1. Declare the class instances (two users and six challenges)
// 2. Set the challenges solved by the users




