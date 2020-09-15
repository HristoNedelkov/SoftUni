function holiday(input) {
    let neededMoney = Number(input.shift());
    let ownedMoney = Number(input.shift());
    let spendCounter = 0;
    let dayCounter = 0;
 
    while (ownedMoney <= neededMoney && spendCounter <= 5) {
        let operation = input.shift();
        let money = Number(input.shift());
 
        if (operation === 'save') {
            dayCounter++;
            ownedMoney += money;
            spendCounter = 0
 
            if (ownedMoney >= neededMoney) {
                console.log(`You saved the money for ${dayCounter} days.`);
                break;
            }
 
        } else if (operation === 'spend') {
            spendCounter++;
            dayCounter++;
            ownedMoney -= money;
 
            if (ownedMoney <= 0) {
                ownedMoney = 0;
            }
 
            if (spendCounter === 5) {
                console.log(`You can't save the money.`);
               console.log(`${dayCounter}`);
               break;
           }
       }
 
   }
}