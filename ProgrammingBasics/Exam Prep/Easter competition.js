function solve(arr) {
    let countKozunaci  =+arr.shift()
    let chefPoints = 0
    let maxPoints = Number.MIN_SAFE_INTEGER
    let winningName = ''
    for (let index = 0; index < countKozunaci; index++) {
        let name = arr.shift()
        let points = arr.shift()
        
        while (points != 'Stop') {
            chefPoints += +points
           
            points = arr.shift()
           
        }
        console.log(`${name} has ${chefPoints} points.`);
        if (chefPoints > maxPoints) {
            maxPoints = chefPoints
            console.log(`${name} is the new number 1!`);
            winningName = name
        }
        chefPoints = 0
    }
console.log(`${winningName} won competition with ${maxPoints} points!`);

    
}
solve([
'4',

'Chef Manchev',
'10',
'10',
'10',
'10',
'Stop',

'Natalie',
'8',
'2',
'9',
'Stop',

'George',
'9',
'2',
'4',
'2',
'Stop',

'Hristakis Vol',
'14',
'2',
'35',
'23',
'132',
'Stop',
])