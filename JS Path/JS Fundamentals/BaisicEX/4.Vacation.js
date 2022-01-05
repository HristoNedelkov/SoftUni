function solve(students, type, day) {
    let stPr = [8.45, 9.80, 10.46]
    let bPr = [10.90, 15.6, 16]
    let regPR = [15, 20, 22.50]

    let price = 0
    if (type == 'Students') {
        if (day == 'Friday') {
            price += students * stPr[0]
        } else if (day == 'Saturday') {
            price += students * stPr[1]
        } else if (day == 'Sunday') {
            price += students * stPr[2]
        }
        if (students >= 30) {
            price -= price * 0.15

        }

    } else if (type == 'Business') {
        if (day == 'Friday') {
            price += students * bPr[0]
            if (students >= 100) {
                price -= 10 * bPr[0]
            }
        } else if (day == 'Saturday') {

            price += students * bPr[1]
            if (students >= 100) {
                price -= 10 * bPr[1]
            }
        } else if (day == 'Sunday') {
            price += students * bPr[2]
            if (students >= 100) {
                price -= 10 * bPr[2]
            }
        }

    } else {
        if (day == 'Friday') {
            price += students * regPR[0]
        } else if (day == 'Saturday') {
            price += students * regPR[1]
        } else if (day == 'Sunday') {
            price += students * regPR[2]
        }
        if (students >= 10 && students <= 20) {
            price -= price * 0.5
        }
    }


    return `Total Price: ${price.toFixed(2)}`



}
console.log(solve(40,
    "Regular",
    "Saturday"

))