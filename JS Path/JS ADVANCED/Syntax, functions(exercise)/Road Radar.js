function solve(n) {
    n += ''
    let sum = n.split('').reduce((a, b) => +a + +b)
    let num = n[0]
    let istrue = false
    for (let i of n) {
        if (i != num) {
            console.log(false)
             istrue = true
            break
        }


    }
    istrue?'':console.log(true)
    console.log(sum)
}
console.log(solve(2222222223));