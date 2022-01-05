function solve (input) {
let num = Number(input.shift())
let row = 1
let cow = 1

while (row <= num) {
    let resault = " "
    while(cow <= num) {
        resault += cow*row + " "
        cow++
        
    }
    row++
    console.log(resault)
    cow = 1
}

}



solve([10])