function solve(arr) {
let days =+arr.shift()
let allHours = +arr.shift()
let allSum = 0
let dailySum = 0
for (let day = 1; day <= days; day++) {
    
    for (let hour = 1; hour <= allHours; hour++) {
        if (hour % 2 == 0 && day % 2 == 1) {
            dailySum += 1.25
        } else if (hour % 2 == 1 && day % 2 == 0){
            dailySum += 2.50
        } else {
            dailySum += 1
        }
        
    }
    console.log(`Day: ${day} - ${dailySum.toFixed(2)} leva`);
    allSum += dailySum
    dailySum = 0
}
console.log(`Total: ${allSum.toFixed(2)} leva`);

}

solve([2, 5])