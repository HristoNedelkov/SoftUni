function solve(input) {
    let student = input.shift()
    let year = 1

let sum = 0

    while (year <= 12) {
let grade = +input.shift()        

        if (grade >= 4) {
            sum += grade
            year++


        } else {
            break
        }

        

    }


let average = sum / 12
console.log(`${student} graduated. Average grade: ${average.toFixed(2)}`)

}

solve([
    'Pesho', '4', '5.5',
    '6', '5.43', '4.5',
    '6', '5.55', '5',
    '6', '6', '5.43',
    '5', '6'
])