function sum (input) {
let end = +input.shift()

let initialValue = 0
let leftSUm = 0
let rightSum = 0
for (let i = 1;i <= end; i++) {

    let currentNumber = +input.shift()

    if(i <= initialValue) {
leftSUm += currentNumber
        

    } else {
        rightSum += currentNumber
    }

}
sum ([
        '2 ',
        '10',
        '60',
        '90',
        '40'


     ])