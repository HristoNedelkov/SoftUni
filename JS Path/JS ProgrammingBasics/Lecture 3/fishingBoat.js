function forSALE(input) {
    let budget = Number(input.shift())
    let season = input.shift()
    let fishers = Number(input.shift())

    if (fishers % 2 == 0) {
        var areEven = true
    }
    let priceForBoat = 0;
    switch (season) {
        case "Summer" || "Autumn": {
            priceForBoat = 4200
        } break;
        case "Winter": {
            priceForBoat = 2600
        } break;
        case "Spring": {
            priceForBoat = 3000
        } 
          
    }
    
    
    if (fishers <= 6) {
        priceForBoat *= 0.90;
    } else if (fishers <= 11) {
        priceForBoat *= 0.85;
    } else if (fishers > 12) {
        priceForBoat *= 0.75;
    }

    if (fishers % 2 == 0 ) {
        priceForBoat *= 0.95;

    }
    let leftMoney = budget - priceForBoat
    let neededMoney = priceForBoat - budget
    
   
    if (budget >= priceForBoat) {
        console.log(`Yes! You have ${leftMoney.toFixed(2)} leva left.`);

    } else {
        console.log(`Not enough money! You need ${neededMoney.toFixed(2)} leva.`);
        
    }
    
}

forSALE([3600, "Autumn", 6])