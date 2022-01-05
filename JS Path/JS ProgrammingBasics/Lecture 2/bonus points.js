function points(input) {
    let score = Number(input.shift())

    let bonus = 0.00

    if (score <= 100) {
       bonus = 5
    } else if (score > 1000) {

        bonus = bonus + score / 10
    } else {

        bonus = bonus + score / 5
    }

    if (score % 2 == 0) {
        bonus+=1

    } else if(score %  10 == 5) {

        bonus+=2

    }
    console.log(bonus)
    console.log(bonus + score)

}

points(["175"])