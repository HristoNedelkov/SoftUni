class Company {
    constructor() {
        this.departments = [];
    }

    addEmployee(username, salary, position, department) {
        for (let arg of [username, salary, position, department]) {
            this.validate(arg)
        }

        if (!this.departments[department]) {
            this.departments[department] = []

        }
        this.departments[department].push({username,salary,position,department})
        console.log(`New employee is hired. Name: ${username}. Position: ${position}`)
    }

    validate(value) {
        if (!value || value < 0) {
            throw Error("Invalid input")
        }
    }
}
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
//console.log(c.bestDepartment());
console.log(c)