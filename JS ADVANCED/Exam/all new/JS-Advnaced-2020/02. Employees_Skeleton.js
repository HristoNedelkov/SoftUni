//start 10:25
function solveClasses() {

    class Developer {
        constructor (firstName,lastName) {
            Object.assign(this,{firstName,lastName,baseSalary: 1000,tasks: [],experience : 0})
        }
        addTask(id,taskName,priority) {
            let task = {id,taskName,priority}
            if(priority == 'high') {
                this.tasks.unshift(task) 
            } else {
                this.tasks.push(task)
            }
            return `Task id ${id}, with ${priority} priority, has been added.`
        }
   
        doTask() {
            if(this.tasks.length == 0 ) {
                return `${this.firstName}, you have finished all your tasks. You can rest now.`
            }
            console.log(this.tasks.shift())
        }
        getSalary() {
            return `${this.firstName} ${this.lastName} has a salary of: ${this.baseSalary}`
        }

        reviewTasks() {
            let res = this.tasks.map(el => `${el.id}: ${el.taskName} - ${el.priority}`)
            return `Tasks, that need to be completed:\n${res.join("\n")}`
        }
   
    }

    class Junior extends Developer {
        constructor(firstName,lastName,bonus,experience ) {
            super(firstName,lastName)
            this.baseSalary  += +bonus 
            this.experience  = +experience 
        }
        learn(years) {
            this.experience  += +years
        }
    }

    class Senior extends Developer {
        constructor (firstName,lastName,bonus, experience ) {
            super(firstName,lastName)
            Object.assign(this, { baseSalary: 1000 + Number(bonus), experience: Number(experience) + 5 });

        }
        changeTaskPriority(taskId) {
            let i = this.tasks.findIndex(el => el.id == taskId)
            this.tasks[i].priority =  this.tasks[i].priority == 'high'? 'low': 'high'
            let task = this.tasks[i];
            this.tasks.splice(i,1)
            if(task.priority == "high") {
                this.tasks.unshift(task)
            } else {
                this.tasks.push(task)
            }
            
            return task


        }
    }
    return {
        Developer,
        Junior,
        Senior
    }
}
let classes = solveClasses();
const developer = new classes.Developer("George", "Joestar");
console.log(developer.addTask(1, "Inspect bug", "low"));
console.log(developer.addTask(2, "Update repository", "high"));
console.log(developer.reviewTasks());
console.log(developer.getSalary());


const junior = new classes.Junior("Jonathan", "Joestar", 200, 2);
console.log(junior.getSalary());

const senior = new classes.Senior("Joseph", "Joestar", 200, 2);
senior.addTask(1, "Create functionality", "low");
senior.addTask(2, "Update functionality", "high");
console.log(senior.changeTaskPriority(1)["priority"]);

