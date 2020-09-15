function solve(arr) {
    let mouth = arr.shift()
    let hours = +arr.shift()
    let peopleInAGroup = +arr.shift()
    let timeOfTheDay = arr.shift()

    let day = false

    if (timeOfTheDay == 'day') {
        day = true
    } else if (timeOfTheDay == 'night') {
        day = false
    }

    let priceForOneHour = 0
    let sum = 0

    switch (mouth) {
        case "march":
            if (day) {
                priceForOneHour += 10.5
            } else {
                priceForOneHour += 8.4
            }
            break;
        case "april":
            if (day) {
                priceForOneHour += 10.5
            } else {
                priceForOneHour += 8.4
            }
            break;
        case "may":
            if (day) {
                priceForOneHour += 10.5
            } else {
                priceForOneHour += 8.4
            }
            break;
        case "june":
            if (day) {
                priceForOneHour += 12.6
            } else {
                priceForOneHour += 10.2
            }

            break;
        case "july":
            if (day) {
                priceForOneHour += 12.6
            } else {
                priceForOneHour += 10.2

            }
            break;
        case "august":
            if (day) {
                priceForOneHour += 12.6
            } else {
                priceForOneHour += 10.2

            }
            break;


        default:
            break;
    }


    if (hours >= 5 && hours <= 10) {
        priceForOneHour -= priceForOneHour / 2
    }
    if (peopleInAGroup >= 4 && peopleInAGroup <= 10) {
        priceForOneHour -= priceForOneHour * 0.1
    }




    sum = (peopleInAGroup * priceForOneHour) * hours


    console.log(`Price per person for one hour: ${priceForOneHour.toFixed(2)}`)
    console.log(`Total cost of the visit: ${sum.toFixed(2)}`)
}

solve(['july', '10', '5', 'night'])