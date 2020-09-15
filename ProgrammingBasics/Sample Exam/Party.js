function solve(arr) {
    let singer = +arr.shift()
    let group = arr.shift()
    let bill = 0
    let count = 0
    while (group != 'The restaurant is full') {
        group = Number(group)
        if (group >= 5) {
            bill += group * 70
        } else {
            bill += group * 100
        }
        count += group
        group = arr.shift()
    }
    let leftMoney = bill - singer
    if (leftMoney >= 0) {
        console.log(`You have ${count} guests and ${leftMoney} leva left.`)

    } else {
console.log(`You have ${count} guests and ${bill} leva income, but no singer.`)
    }

}
solve([
    '2800',
    '5',
    '5',
    '4',
    '6',
    '6',
    '12',
    '12',
    'The restaurant is full'
]
)