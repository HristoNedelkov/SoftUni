class Person {

    constructor(name, age) {
        this.name = name || 'No Name'
        this.currAge = age || "no data"
    }
    get age() {
        return "Thats his years " + this.currAge;
    }

    set age(value) {
        if (value <= 3) {
            this.currAge = 'Small Kid   '
        } else {
            this.currAge = value
        }
    }

    greet() {
        console.log("Hello" + this.name);
    }
    repeatIt(n) {
        console.log(`${(this.name + " and " + this.age + " ").repeat(n)} `)
    }
}
let person = new Person('Kolo')
let p2 = new Person('jors', 13)
let p3 = new Person()
p3.age = 1
console.log(p3.repeatIt(5));
