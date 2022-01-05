function solve(arr) {
    let costNeeded = +arr.shift()
    let months = +arr.shift()
    let sum = 0
    let percentage = costNeeded * 0.25

    for (let i = 1; i <= months; i++) {
        let bonus = sum * 0.25
        if (i % 4 == 0) {
            sum += bonus
        }

        if (i % 2 == 1 && i >= 2) {
            sum -= sum * 0.16
        }

        sum += percentage

        
    }
    if (sum >= costNeeded) {
        console.log(`Bravo! You can go to Disneyland and you will have ${(sum - costNeeded).toFixed(2)}lv. for souvenirs.`)
        return
    }  else {

        let more = costNeeded - sum
        console.log(`Sorry. You need ${more.toFixed(2)}lv. more.`)
    }
}

solve(['1000', '4'])