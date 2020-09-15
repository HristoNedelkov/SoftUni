    function theFilm(input){
    let budget = Number(input.shift())
    let broiStatisti = Math.round(Number(input.shift()))
    priceForOneClothing  = Number(input.shift())
    let sumaZaDekor = budget / 10
    let priceForClothes = broiStatisti * priceForOneClothing

    if (broiStatisti > 150){
        priceForClothes = priceForClothes - (priceForClothes / 10)
        }
    let obshtSuma = sumaZaDekor + priceForClothes

    let razhodi = priceForClothes + sumaZaDekor
    
    let moneyLeft = budget - obshtSuma
    let moneyNeed = obshtSuma - budget

    if (broiStatisti > 150){
    priceForClothes = priceForClothes - (priceForClothes / 10)
    }

    if (razhodi > budget){

        console.log("Not enough money!")
        console.log("Wingard needs " + (moneyNeed).toFixed(2) + " leva more.")
    }

    if (budget >= razhodi){

        console.log("Action!")
        console.log("Wingard starts filming with "+ moneyLeft.toFixed(2) + " leva left.")

    }
    
    
    }



theFilm(["1000", "120", "55.5"])