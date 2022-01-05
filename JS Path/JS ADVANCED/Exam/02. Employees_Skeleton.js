function solveClasses() {
    class Developer {
        constructor(firstName, lastName) {
            this.firstName = firstName,
                this.lastName = lastName,
                this.baseSalary = 1000,
                this.tasks = [],
                this.experience = 0
        }
        addTask(id, taskName, priority) {
            let obj = {
                id,
                taskName,
                priority
            }
            if (priority == 'high') {
                this.tasks.unshift(obj)
            } else {
                this.tasks.push(obj)
            }

            return `Task id ${id}, with ${priority} priority, has been added.`
        }
        //Here can be a mestake!!!
        doTask() {
            let e = this.tasks.shift()
            if (e == undefined) {
                return `${this.firstname}, you have finished all your tasks. You can rest now.`
            }
        }
        getSalary() {
            return `${this.firstName} ${this.lastName} has a salary of: ${this.baseSalary}`
        }
        reviewTasks() {
            let res = "Tasks, that need to be completed:\n"
            this.tasks.forEach(el => {
                res += `${el.id}: ${el.taskName} - ${el.priority}`+ "\n"
            })
            return res
        }

    }
    class Junior extends Developer {
        constructor(firstName, lastName, bonus, experience) {
            super(firstName, lastName),
                this.bonus = bonus,
                this.baseSalary = 1000+ bonus
                this.experience = experience
        }
        learn( years ){
            this.experience+= years
        }
    }
    class Senior extends Developer {
        constructor( firstName, lastName, bonus, experience ){
            super(firstName, lastName,),
            this.baseSalary = 1000+ bonus,
            this.tasks = [],
            this.experience = +experience+ 5

        }
        changeTaskPriority(curTaskId) {
            let theTask = this.tasks.find((el,i)=> el.taskId == curTaskId)
            let i = this.tasks.indexOf(theTask)
            theTask = this.tasks.splice(i,1)
            theTask.priority = theTask.priority =="high"? "low":'high'
            
            if (theTask.priority == 'high') {
                this.tasks.unshift(theTask)
            } else {
                this.tasks.push(theTask)

            }
            return theTask
            
        }
    }
    return {
        Developer,
        Junior,
        Senior
    }
}
const classes = solveClasses();
const developer = new classes.Developer("Jonathan", "Joestar");
console.log(developer)
const salaryResult = developer.getSalary();
// Salary
console.log(developer.getSalary(    ))