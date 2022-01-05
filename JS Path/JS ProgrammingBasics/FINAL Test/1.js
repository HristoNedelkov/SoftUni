function solve (arr) {
let ceilFirstNum = +arr.shift()
let ceilSecondNum = +arr.shift()
let ceilThirdNum = +arr.shift()

for (let f = 2; f <= ceilFirstNum; f++) {
    for (let s = 2; s <= ceilSecondNum; s++) {
       
        for (let t = 2; t <= ceilThirdNum; t++) {
        if ((s == 2 || s == 3 || s == 5 || s == 7) && (f % 2 == 0 && t % 2 == 0)) {
            console.log(`${f} ${s} ${t}`)
        }
        }   
    }       
}
}

solve([ '3', '5', '5' ])