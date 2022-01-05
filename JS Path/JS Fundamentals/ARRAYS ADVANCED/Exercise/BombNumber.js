function solve(sequance, bombInfo) {
    const theBomb = bombInfo[0]

    const bombPower = bombInfo[1]
    let bombPlace = sequance.indexOf(theBomb)

    while (bombPlace !== -1) {



        sequance.splice(bombPlace + 1, bombPower)
        
        sequance.splice(Math.max(bombPlace - bombPower, 0), bombPower + 1)
     
        bombPlace = sequance.indexOf(theBomb)
    }
    console.l2og(sequance.reduce((a, b) => a + b, 0));

}


