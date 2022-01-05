// class Person {
//     constructor(name) {
//         this.name = name
//     }
//     sleep() {
//         console.log( `${this.name} is sleeping!` )
//     }
// }

// class Programmer extends Person {
//     constructor(name, job) {
//         super(name),
//             this.job = job
//     }

//     jobSay() {
//         console.log(`${this.name} is working in ${this.job}`)
//     }
// }
// let pesho = new Programmer('Pesho', 'programist')


// pesho.sleep()
// pesho.jobSay()


let stud2 = {
    name: 'hiafs',
    hasPan: false,
    write: function () {
        console.log(`My name is ${this.name}`)
    }
}

let st = {
    name:'Ivanchop'
}

Object.se tPrototypeOf(st,stud2)
st.write()