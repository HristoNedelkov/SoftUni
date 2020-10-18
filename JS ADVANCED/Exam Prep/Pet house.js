function solveClasses() {
    class Pet {
        constructor(owner, name) {
            this.owner = owner,
                this.name = name
            this.comments = []
        }
        addComment(comment) {
            if (this.comments.includes(comment)) {
                return `This comment is already added!`
            } else {
                this.comments.push(comment)
                return ('Comment is added.')

            }
        }
        feed() {
            return `${this.name} is fed`
        }
        toString() {
            if (this.comments.length > 0) {

                return `Here is ${this.owner}'s pet ${this.name}.
Special requirements: ${this.comments.join(', ')}`
            } else {
                return `Here is ${this.owner}'s pet ${this.name}.`
            }

        }
    }
    class Cat extends Pet {
        constructor( owner, name, insideHabits, scratching ) {
           super(owner);

            this.name = name,
            this.insideHabits = insideHabits,
            this.scratching = scratching
        }

        feed() {
          return  this.feed() + ", happy and purrimng"
        }
    }
    class Dog {

    }
    return {
        Pet,
        Cat,
        Dog,
    }
}

let classes = solveClasses();
let pet = new classes.Pet('Ann', 'Merry');
console.log(pet.addComment('likes bananas'));
console.log(pet.addComment('likes sweets'));
console.log(pet.feed());
console.log(pet.toString());
console.log(pet)
let cat = new classes.Cat('Jim', 'Sherry', 'very good habits', true);
//console.log(cat.addComment('likes to be brushed'));
//console.log(cat.addComment('sleeps a lot'));
console.log(cat.feed());
console.log(cat.toString());
