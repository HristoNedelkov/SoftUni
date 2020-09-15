function solve(arr) {
    let moneyForFood = +arr.shift()
    let moneyForSouvenirs = +arr.shift()
    let moneyForHotel = +arr.shift()

    let hotelPrice = (moneyForHotel * 0.9) + (moneyForHotel * 0.85) + (moneyForHotel * 0.80)
    let other = (moneyForSouvenirs * 3) + (moneyForFood * 3)

    console.log(`Money needed: ${(other + hotelPrice + 54.39).toFixed(2)}`)

}

solve(['100', '50', '500'])