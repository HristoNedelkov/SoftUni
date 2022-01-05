function solveClasses() {

    class Person {
        constructor(firstName, lastName) {
            Object.assign(this, { firstName, lastName, problems: [] })

        }
        toString() {
            return `${this.firstName} ${this.lastName} is part of SoftUni community now!`
        }
    }

    class Teacher extends Person {
        constructor(firstName, lastName) {
            super(firstName, lastName)
        }
        createProblem(id, difficulty) {
            let problem = { id, difficulty }
            this.problems.push(problem)
            return this.problems

        }

        getProblems() {
            return this.problems
        }

        showProblemSolution(id) {
            let problem = this.problems.filter(el => el.id != id)
            let pI = this.problems.findIndex(el => el.id == id)

            if (!problem) {
                throw new Error(`Problem with id ${id} not found.`)
            } else {
                this.problems[pI].difficulty--
                return problem
            }
        }

    }

    class Student extends Person {
        constructor(firstName, lastName, graduationCredits, problems) {
            super(firstName, lastName,)
            Object.assign(this, { graduationCredits, myCredits: 0, solvedProblems: [],problems })
        }
        solveProblem(id) {
            let isHere = this.problems.find(el => el.id == id)
            if (!isHere) {
                return `Problem with id ${id} not found.`
            } else {
                let isSolved  = this.solvedProblems.find(el=> el.id == id)
                
                if(!isSolved) {
                    this.myCredits += +isHere.difficulty
                    this.solvedProblems.push(isHere)

                } else {
                    return
                }

            }
            return this.myCredits

        }
        graduate() {
            
            if(this.myCredits >= this.graduationCredits) {
                return `${this.firstName} ${this.lastName} has graduated succesfully.`
            } else {
                return `${this.firstName} ${this.lastName}, you need ${ this.graduationCredits - this.myCredits } credits to graduate.`
            }
        }
    }
    return {
        Person,
        Teacher,
        Student
    }
}

const classes = solveClasses();
const teacher = new classes.Teacher("Ivailo", "Papazov");
const student = new classes.Student("John", "Doe", 16, [{id: 'as345df', difficulty: 3}, {id: 'fg745bvb', difficulty: 11}]);

student.solveProblem('as345df');
//expect(student.myCredits).to.equal(3);

student.solveProblem('fg745bvb');
//expect(student.myCredits).to.equal(3+11);
console.log(student.myCredits)
const solvedProblems = [{id: 'as345df', difficulty: 3}, {id: 'fg745bvb', difficulty: 11}];
//expect(student.solvedProblems).to.deep.equal(solvedProblems);

const resultString = student.graduate();
const expectedString = `John Doe, you need 2 credits to graduate.`;
//expect(resultString).to.equal(expectedString);