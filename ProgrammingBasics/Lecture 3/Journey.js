function solve(arr) {
    let budget = arr.shift()
    let season = arr.shift()

    
        if (budget <= 100){
            switch (season) {
                case "winter":
                    budget *= 0.70
                    console.log(`Somewhere in Bulgaria
            Hotel - ${budget.toFixed(2)}
            `);
                    break;
                case "summer":
                    budget *= 0.30
                    console.log(`Somewhere in Bulgaria
            Camp - ${budget.toFixed(2)}
            `);
                    break;

            }
            
            
        } else if (budget <= 1000){
            switch (season) {
                case "winter":
                    budget *= 0.80
                    console.log(`Somewhere in Balkans
Hotel - ${budget.toFixed(2)}`)
                    break;
                case "summer":
                    budget *= 0.40
                    console.log(`Somewhere in Balkans
Camp - ${budget.toFixed(2)}`);
                    break;

            }
            
            
        }else if (budget > 1000){

            budget *= 0.90
            console.log(`Somewhere in Europe 
            Hotel - ${budget.toFixed(2)}`);
            
        }


    
}
    solve([
        "50",
        "summer",
    ])