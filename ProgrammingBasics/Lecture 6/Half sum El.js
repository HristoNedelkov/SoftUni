function solve (input) {
    let n = +input.shift()
    
    let sum = 0;
    let max = Number.MIN_SAFE_INTEGER

   
   
    for (let i = 1; i <= n;i++) {
        let num = +input.shift()
        sum += num         
            if (num > max) {    
                max = num        
            }
            




    }
    
     let resealt = sum - max
    if (resealt === max) {
        console.log("Yes")
        console.log(`Sum = ${max}`)
    } else {
        let diff = Math.abs(max - resealt)
        console.log(`No`)
         console.log(`Diff = ${diff}`)    
    }

}

solve ([ '4', '6', '1', '2', '3' ])