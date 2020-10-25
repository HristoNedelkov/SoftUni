class Parking {
    constructor(capacity) {
        this.capacity = capacity,
            this.vehicles = []
    }
    addCar(carModel, carNumber) {
        if (this.vehicles.length == this.capacity) {
            throw new Error("Not enough parking space.")
        } else {
            let obj = {
                carModel,
                carNumber,
                "payed": false
            }
            this.vehicles.push(obj)
            return `The ${carModel}, with a registration number ${carNumber}, parked.`
        }
    }
    removeCar(currCarNumber) {
        let car = this.vehicles.find(el => el.carNumber == currCarNumber)
        if (car) {
            if (car.payed) {
                let i = this.vehicles.indexOf(car)
                this.vehicles.splice(i, 1)
                return `${car.carNumber} left the parking lot.`
            } else {
                throw new Error(`${currCarNumber} needs to pay before leaving the parking lot.`)
            }

        } else {
            throw new Error("The car, you're looking for, is not found.")
        }
    }
    pay(currCarNumber) {
        let car = this.vehicles.find(el => el.carNumber == currCarNumber)
        if (car) {
            if (car.payed) {
                throw new Error(`${car.carNumber}'s driver has already payed his ticket.`)
            } else {
                car.payed = true
                return `${car.carNumber}'s driver successfully payed for his stay.`
            }
        } else {
            throw new Error(`${car.carNumber} is not in the parking lot.`)
        }
    }
    getStatistics(...arr) {
        let currCarNumber = arr.find(el => el != undefined)
        let car = this.vehicles.find(el => el.carNumber == currCarNumber)
        if (currCarNumber) {
            return `${car.carModel} == ${car.carNumber} - ${car.payed ? 'Has payed' : 'Not Payed'}`
        } else {
            let res = ''
            res += `The Parking Lot has ${this.capacity - this.vehicles.length} empty spots left.\n`
            let arr =[] 
            this.vehicles.forEach((el,i)=>  {
                arr.push(Object.entries(el))
            })
            arr = arr.sort((a,b)=> a[0][1].localeCompare(b[0][1]))
            arr.forEach(el => {
                res+= `${el[0][1]} == ${el[1][1]} - ${el[2][1] == true? 'Has payed' : 'Not Payed'}\n` 
            })
            return res
        }

    }
}

const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.getStatistics());

console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));

/*
The Volvo t600, with a registration number TX3691CA, parked.
The Parking Lot has 11 empty spots left.
Volvo t600 == TX3691CA - Not payed
TX3691CA's driver successfully payed for his stay.
TX3691CA left the parking lot.
*/