function solve(arr) {
    let wantedHeight = +arr.shift()
    let theCurrentLath = wantedHeight - 30
    let isDone = false
    let highestJump = Number.MIN_SAFE_INTEGER
    let theJump = +arr.shift()
    
    
    let jumps = 0
    
    while (theJump !== undefined) {
    if (theJump > highestJump) {
        highestJump = theJump
    }        

        for (let trys = 1; trys <= 3; trys++) {
           
            if (theJump > theCurrentLath) {
                theCurrentLath += 5
                jumps++
                isDone = true
                if(highestJump > wantedHeight) {
                    console.log(`Tihomir succeeded, he jumped over ${wantedHeight}cm after ${jumps} jumps.`);
                return
                }
                break        

            } else {
                theJump = +arr.shift()
                
                jumps++
                if (theJump > highestJump) {
                    highestJump = theJump
                }
            }
            if (trys == 3 && isDone == false ) {
                console.log(
                    `Tihomir failed at ${theCurrentLath}cm after ${jumps} jumps.`);
             return   
            }
        }
        theJump = +arr.shift()
        isDone =false
        
        if(highestJump >= wantedHeight) {
            console.log(`Tihomir succeeded, he jumped over ${wantedHeight}cm after ${jumps} jumps.`);
        return
        }
    }
    
    console.log(`Tihomir succeeded, he jumped over ${theJump}cm after ${jumps} jumps.`);
    
}
    solve([
        '231', '205', '212',
        '213', '228', '229',
        '230', '235', ''
      ])
