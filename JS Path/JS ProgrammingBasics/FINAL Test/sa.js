function solve(arr) {
    let month = arr.shift();
    let gameTime = +arr.shift()
    let numOfPeople = +arr.shift()
    let dayOrNight = arr.shift();

    let prizePerPeople = 0;

    if (month == "march" || month == "april" || month == "may") {

        if (dayOrNight == "day") {
            prizePerPeople = 10.5;
        } else {
            prizePerPeople = 8.4;
        }

    } else if (month=="june" || month == "july" || month == "august") {

        if (dayOrNight == "day") {
            prizePerPeople = 12.6;
        } else if (dayOrNight=="night") {
            prizePerPeople = 10.2;
        }
    }
     if (numOfPeople >= 4) {
        prizePerPeople = prizePerPeople * 0.9;
    }
     if (gameTime >= 5) {
        prizePerPeople = prizePerPeople / 2;
    }
    let totalCost = prizePerPeople * numOfPeople * gameTime;

    console.log(`Price per person for one hour: ${prizePerPeople.toFixed(2)}`);
    console.log(`Total cost of the visit: ${totalCost.toFixed(2)}`);

}
solve(['july', '10', '5', 'night'])
