function solve (input) {
    let moneyForSinger = +input.shift()
    
    let totalMoney = 0
    let geustsNum = 0
    let line = input.shift()
    while (line !== "The restaurant is full") {
            let group = +(line)
        if (group < 5) {
            totalMoney += (group * 100)
            geustsNum += group
        } else if (group >= 5) {
            totalMoney += group * 70
            geustsNum += group
        }
        line = input.shift()
        }
    
        let moneyLeft = Math.abs(totalMoney - moneyForSinger)
    
            if (totalMoney >= moneyForSinger) {
                console.log(`You have ${geustsNum} guests and ${moneyLeft} leva left.`)
    
            } else {
                console.log(`You have ${geustsNum} guests and ${totalMoney} leva income, but no singer.`)
    
            }
    
    }

solve ([ 
    '23900',
    '5',
    '12',
    '6',
    '6',
    '12',
    '5',
    '12',
    '6',
    '6',
    '12',
    '5',
    '12',
    '6',
    '6',
    '12',
    '6',
    '12',
    '5',
    '12',
    '6',
    '6',
    '12',
    '5',
    '12',
    '6',
    '6',
    '12',
    '5',
    '12',
    '6',
    '12',
    '5',
    '12',
    '6',
    '6',
    '12',
    '5',
    '12',
    '5',
    '12',
    '6',
    '12',
    '5',
    '12',
    '6',
    '6',
    '12',
    '5',
    '12',
    '6',
    '12',
    'The restaurant is full',
    
    
])