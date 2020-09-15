function solve(arr) {
    

let desiredHigh = arr.shift()

let startingHigh = desiredHigh - 35;
let jumps = 0;
let flagFail = false;
while (!flagFail) {
    startingHigh += 5;
    flagFail = true;
    let jumpingHigh;
    for (let i = 1; i <= 3; i++) {
        jumps++;
        jumpingHigh = arr.shift()
        if (jumpingHigh > startingHigh) {
            if (startingHigh >= desiredHigh) {
                console.log(`Tihomir succeeded, he jumped over ${startingHigh}cm after ${jumps} jumps.`);
                
                return;
            }
            flagFail = false;
            break;
        }
    }
}
console.log(`Tihomir failed at ${startingHigh}cm after ${jumps} jumps.`);

    }

    solve([
'231',
'205',
'212',
'213',
'228',
'229',
'230',
'235',])
