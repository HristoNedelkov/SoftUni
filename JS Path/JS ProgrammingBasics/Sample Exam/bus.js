function solve (arr) {
let passegers = +arr.shift()
let stopsNum = +arr.shift()


for (let i = 1; i <= stopsNum; i++) {
    let slezli =+arr.shift()
    let kachiliSe = +arr.shift()

    passegers -= slezli
    passegers += kachiliSe
    if (i % 2 == 0) {
        passegers -= 2
    }else {
        passegers += 2
    }

}
console.log(`The final number of passengers is : ${passegers}`)
}
solve([
    '20', '2', '10',
    '5',  '5', '3',
    ''
  ])