function solve(arr) {

    let allLevels = []
    
    allLevels.sort((a, b) => a + b)
    
    for (const index in arr) {
        let geroi = arr[index]
        let nowo = geroi.split(' / ')
        let level = nowo[1]
        allLevels.push(level)
    }
    
    while (arr[0] == undefined) {
        
    
    for (let heros of arr) {


        let theHero = heros.split(' / ')

        let heroName = theHero[0]
        let heroLevel = theHero[1]
        let weapons = theHero[2];

        let biggestLevel = allLevels.shift()

        if (s) {
            allLevels.slice(index, 1)
        }

    }
}
 
   console.log(allLevels);


}
solve(
    [
        "Isacc / 25 / Apple, GravityGun",
        "Derek / 12 / BarrelVest, DestructionSword",
        "Hes / 1 / Desolator, Sentinel, Antara"
    ]

)