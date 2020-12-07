class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	compareAge(other) {
        let otherAge = other.age
        if(otherAge=== this.age) {
            return `${other.name} is the same age as me.`
        }
            return `${other.name} is ${otherAge > this.age?'older':'younger'} than me.`
	}
}

p1 = new Person("Samuel", 24)
p2 =  new Person("Joel", 36)
p3 = new Person("Lily", 24)
console.log(p1.compareAge(p2))
p2.compareAge(p1)
p1.compareAge(p3)