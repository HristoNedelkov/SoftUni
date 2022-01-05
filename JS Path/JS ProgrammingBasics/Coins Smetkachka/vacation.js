function moneyForVacation(input) {
    let neededMoney = +input.shift()
    let ownedMoney = +input.shift()


    let spendCounter = 0;
    let daysCounter = 0;
    while (ownedMoney < neededMoney && spendCounter < 5) {
        let command = input.shift()
        let money = +input.shift()
        
        if (command == "spend") {
            ownedMoney = spendCounter - money 
                
            spendCounter++
        } else {
            ownedMoney += money;
            spendCounter = 0
        }
        
        
        if(ownedMoney < 0){
            ownedMoney = 0
        }
        
        
        daysCounter++
    }
    if (spendCounter == 5){
        console.log("You can't save the money.")
        console.log(daysCounter)
    }


    if (ownedMoney >= neededMoney) {
        console.log(`You saved the money for ${daysCounter} days.`)
    }



   // console.log(spendCounter)
}

moneyForVacation([
    '250',   '150',
    'spend', '50',
    'spend', '50',
    'save',  '100',
    'save',  '100'
  ])