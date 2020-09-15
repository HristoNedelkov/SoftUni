function solve(arr) {
    let pirateShip = arr.shift().split('>')
    let warship = arr.shift().split('>')
    let maxhealthCap = +arr.shift()

    for (const line of arr) {

        let newLine = line.split(' ')
        let command = newLine.shift()
        let damage = newLine

        if (command == 'Retire') {
            break
        }


        switch (command) {
            case 'Fire':
                let index = +damage.shift()
                if (index >= warship.length  || index < 0) {
                    break
                } else {
                    warship[index] -= +damage.shift()
                    if (warship[index] <= 0) {
                        console.log("You won! The enemy ship has sunken.");
                        return
                    }
                }


                break;
            case 'Defend':
                let [startIndex, endIndex, doneDamage] = damage
                if (startIndex < 0 || startIndex >= pirateShip.length || endIndex < 0 || endIndex >= pirateShip.length || startIndex >= endIndex) {
                    break
                
                } else {
                    for (let index = +startIndex; index <= +endIndex; index++) {
                        pirateShip[index] -= Number(doneDamage);
                        if (pirateShip[index] <= 0) {
                            console.log("You lost! The pirate ship has sunken.");
                            return
                        }
                    }
                }
                
                
                break;
            case 'Repair':
                let [i, health] = damage
                health = +health
               if (i < 0 || i >= pirateShip.length) {
                   break
               }
               
                if (pirateShip[i] + health >= maxhealthCap) {
                    pirateShip[i] = maxhealthCap
                } else {
                    pirateShip[i] += health
                }
                
                
                break;
            case 'Status':
                let count = 0
               pirateShip.forEach(element => {
                   if (element < maxhealthCap * 0.2) {
                       count++
                   }
               });

                
                console.log(`${count} sections need repair.`);

                break;
        }
    }
    let pirateShipSUm = 0
    let warShipSUm = 0
    for (const num of pirateShip) {
        
        pirateShipSUm += +num
    }
    for (const number of warship) {
        warShipSUm += +number
    }
    console.log(`Pirate ship status: ${pirateShipSUm}`);
    console.log(`Warship status: ${warShipSUm}`);

}


solve
    ([
        '12>13>11>20>66',
        '12>22>33>44>55>32>18',
        '70',
        'Fire 2 11',
        'Fire 8 100',
        'Defend 3 6 11',
        'Defend 0 3 5',
        'Repair 1 33',
        'Status',
        'Retire'
    ])

