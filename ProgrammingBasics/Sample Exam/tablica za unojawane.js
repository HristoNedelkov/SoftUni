function solve(arr) {
let num = arr.shift()
let first = num[2]
let second = num[1]
let third = num[0]


for (let f = 1; f <= first; f++) {
  
    for (let s = 1; s <= second; s++) {
     
        for (let t = 1; t <= third; t++) {
            console.log(`${f} * ${s} * ${t} = ${f * s * t}`)
            
        }
        
    }
    
}
}

solve(['324'])