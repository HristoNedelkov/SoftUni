
coins([145.79])


function coins(input) {
   let money1 = +input.shift()
    let money = money1

    let coins = 0;

    let dvulewki = 0
    let levcheta = 0
    let petdesest = 0
    let dwaisestot = 0
    let desetstot = 0
    let petstot = 0
    let dwestot = 0
    let ednastot = 0

    money *= 100

    while (money > 0) {
        if (money >= 200) {
            coins++
            money -= 200
            dvulewki++
        } else {
            break
        }
    }

    while (money > 0) {
        if (money >= 100) {
            coins++
            money -= 100
            levcheta++
        } else {
            break
        }
    }

    while (money > 0) {
        if (money >= 50 ) {
            coins++
            money-=50
            petdesest++
        } else {
            break
        }

    }

    while (money > 0){
        if(money >=20){
            coins++
            money -= 20
            dwaisestot++
        } else {
            break
        }
    }

    while (money > 0) {
        if (money >= 10) {
            coins++
            money -= 10
            desetstot++
        } else {
            break;
        }
    }
         
    while (money > 0){
        if (money >=5){
            coins++
            money -= 5
            petstot++
        } else {
            break
        }
    }
    
    while (money > 0){
        if (money >= 2){
            coins++
            money -= 2
            dwestot++
        } else {
            break
        }
    }

    while (money > 0){
        if (money >= 1){
            coins++
            money -= 1
            ednastot++
        } else {
            break
        }
    }



    
    console.log(`Your resto is: ${money1}`)
    console.log(`The money in your accont: ${coins} !`)
    console.log("")
    console.log("")
    
console.log(`You are with only: `)
console.log(`${dvulewki} - 2lv `)
console.log(`${levcheta} - 1lv`)
console.log(`${petdesest} - 50st`)
console.log(`${dwaisestot} - 20st`)
console.log(`${desetstot} - 10st`)
console.log(`${petstot} - 5st`)
console.log(`${dwestot} - 2st`)
console.log(`${ednastot} - 1st`)










}

