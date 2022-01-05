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
    //Thats its how its supposed to be
    removeCar(currCarNumber) {
        const foundIndex = this.vehicles.findIndex((c) => c.carNumber === currCarNumber)
        const found = this.vehicles[foundIndex]
        if (!found) {
            throw new Error("The car, you're looking for, is not found.");
          }
      
          if (!found.payed) {
            throw new Error(`${currCarNumber} needs to pay before leaving the parking lot.`);
          }

          
      this.vehicles.splice(foundIndex, 1);
      return `${currCarNumber} left the parking lot.`;
    }
    //thats OKEY
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
            throw new Error(`${currCarNumber} is not in the parking lot.`)
        }
    }
    getStatistics(carNumber) {
        if (carNumber) {
            const found = this.vehicles.find((c) => c.carNumber === carNumber);
            return `${found.carModel} == ${found.carNumber} - ${found.payed ? 'Has payed' : 'Not payed'}`;
        } else {
            return `The Parking Lot has ${this.capacity - this.vehicles.length} empty spots left.\n${this.vehicles
                .sort((a, b) => a.carModel.localeCompare(b.carModel))
                .map(({ carModel, carNumber, payed }) => `${carModel} == ${carNumber} - ${payed ? 'Has payed' : 'Not payed'}`)
                .join('\n')}`;
        }

    }
}

// const parking = new Parking(12);

// console.log(parking.addCar("Volvo t600", "TX3691CA"));
// console.log(parking.getStatistics());

// console.log(parking.pay("TX3691CA"));
// console.log(parking.removeCar("TX3691CA"));

/*
The Volvo t600, with a registration number TX3691CA, parked.
The Parking Lot has 11 empty spots left.
Volvo t600 == TX3691CA - Not payed
TX3691CA's driver successfully payed for his stay.
TX3691CA left the parking lot.
*/