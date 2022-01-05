class Name {
    constructor(fname,lname) {
        this.fname = `${fname[0].toUpperCase()}${fname.toLowerCase().slice(1)}`;
        this.lname = `${lname[0].toUpperCase()}${lname.toLowerCase().slice(1)}`;
        this.fullName = `${this.fname} ${this.lname}` ;
        this.initials = `${this.fname[0]}.${this.lname[0]}`;
    }
}

let a2 = new Name("sARah", "fRolliE")
console.log(a2.fname)
console.log(a2.fullName)
console.log(a2.initials)