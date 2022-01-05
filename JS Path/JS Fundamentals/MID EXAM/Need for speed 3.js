function solve(arr) {
    let nCars = arr.shift()
    let carsObj = {}
    for (let i = 0; i < nCars; i++) {
        let element = arr.shift();
        element = element.split('|')
        let modelAndName = element[0]
        carsObj[modelAndName] = [+element[1], +element[2]]
    }

    function drive(name, dist, fuel) {
        let isEnough = (carsObj[name][1] - fuel) > 0 ? true : false;

        // let res = carsObj[name][1] >
        if (isEnough) {

            carsObj[name][0] += dist
            carsObj[name][1] -= fuel
            console.log(`${name} driven for ${dist} kilometers. ${fuel} liters of fuel consumed.`)
        } else {
            console.log(`Not enough fuel to make that ride`)
        }

        if (carsObj[name][0] >= 100000) {
            console.log(`Time to sell the ${name}!`)
            delete carsObj[name]
        }
        return
    }
    function refuel(name, fuel) {
        let carFuel = carsObj[name][1] + fuel

        if ( carFuel >= 75) {
            console.log(`${name} refueled with ${ 75- carsObj[name][1] } liters`)
            carsObj[name][1] = 75
        } else {
            carsObj[name][1] += fuel
            console.log(`${name} refueled with ${fuel} liters`)
        }

        return
    }
    function revert(name, km) {
        carsObj[name][0] -= km
        if (carsObj[name][0] < 10000) {

            carsObj[name][0] = 10000
        } else {

            console.log(`${name} mileage decreased by ${km} kilometers`)
        }
        return
    }
    for (let line of arr) {
        line = line.split(" : ")
        let comnd = line.shift()
        let name = line.shift()
        let firstP = +line.shift()
        let secondP = +line.shift()

        if (comnd == "Drive") {
            drive(name, firstP, secondP)
        } else if (comnd == "Refuel") {
            refuel(name, firstP)
        } else if (comnd == "Revert") {
            revert(name, firstP)
        }
    }
    var sortable = [];
    for (let key in carsObj) {
        sortable.push([key, carsObj[key]])
    }

    sortable.sort((a, b) => b[1][0] - a[1][0] || a[0].localeCompare(b[0]))
    for (const arr of sortable) {
        let car = arr[0]
        let [mileage,fuel] = [...arr[1]]
        console.log(`${car} -> Mileage: ${mileage} kms, Fuel in the tank: ${fuel} lt.`);

    }
}

console.log(solve([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ]
  ))
