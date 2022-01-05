function solve (arr) {
let georgeSpeed = arr.shift()
let fuelForHundred = arr.shift()

let hours = Math.ceil((384400*2) / georgeSpeed) + 3
let gorivo = (fuelForHundred * (384400*2))/100


console.log(hours.toFixed(0))
console.log(gorivo)
}

solve([ '10000', '5' ])