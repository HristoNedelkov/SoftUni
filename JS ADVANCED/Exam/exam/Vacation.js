class Vacation {
    constructor(organizer, destination, budget) {
        Object.assign(this, { organizer, destination, budget, kids: {} })

    }
    registerChild(name, grade, budget) {
        if (budget < this.budget) {
            return `${name}'s money is not enough to go on vacation to ${this.destination}.`
        }
        let isThere
        if (this.kids[grade]) {

            isThere = this.kids[grade].find(el => el == name)
        } else {
            isThere = false
        }

        if (!isThere) {

            if (this.kids.hasOwnProperty(grade)) {
                this.kids[grade].push(`${name}-${budget}`)
               
                return this.kids[grade]
            } else {
                
                
                this.kids[grade] = [`${name}-${budget}`]

                return this.kids[grade]
            }
        } else {
            return `${name} is already in the list for this ${this.destination} vacation.`
        }


    }
    removeChild(name, grade) {
        let isThere
        if (this.kids[grade]) {
            isThere = this.kids[grade].findIndex(el => el.split('-')[0] == name)
            this.kids[grade].splice(isThere, 1)
        } else {
            isThere = `We couldn't find ${name} in ${grade} grade.`

        }
        return isThere
    }
    toString() {
        let sorted = Object.entries(this.kids).sort((a, b) => b[0] - a[0])
        let numberOfChildren = 0
        sorted.forEach(e => numberOfChildren += e[1].length);
        if(numberOfChildren === 0) {
            return `No children are enrolled for the trip and the organization of ${this.organizer} falls out...
Check the example below for more clarity.`
            
        }
        
         let res =[]
         res.push( `${this.organizer} will take ${numberOfChildren} children on trip to ${this.destination}`)
        sorted.forEach(e=> {
            res.push( `Grade: ${e[0]}`)
            e[1].forEach((e,i) => {
                res.push(`${i+1}. ${e}`)
            })
            res.push('\n')
        })
        
        res.push('\n')
        return res.join('\n')

    }
    numberOfChildren() {
        let sorted = Object.entries(this.kids)
        let numberOfChildren = 0
         sorted.forEach(e => numberOfChildren += e[1].length);
         return numberOfChildren
    }
}
// testing toString method

//const Vacation = solveClasses();

let vacation = new Vacation('Miss. Elizabeth', 'The bahamas', 400);

vacation.registerChild('Gosho', 12, 3400);
vacation.registerChild('Pesho', 12, 400);
vacation.registerChild('Pesho', 12, 400);
vacation.registerChild('Skaro', 11, 400);
vacation.registerChild('Gosho', 11, 3444);

let output = vacation.toString();
console.log(output)
//expect(output).to.equal("Miss. Elizabeth will take 4 children on trip to The bahamas\nGrade: 11\n1. Skaro-400\n2. Gosho-3444\nGrade: 12\n1. Gosho-3400\n2. Pesho-400\n");