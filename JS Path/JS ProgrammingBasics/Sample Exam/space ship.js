function solve(arr) {
    let shirochina = +arr[0]
    let duljina = +arr[1]
    let wisochina = +arr[2]
    let AstronawWisochina  =+arr[3]

    let spacePlosht = shirochina * duljina * wisochina
    let AstronawNeeds = (AstronawWisochina + 0.40) * 4

    let numberAstr = Math.floor(spacePlosht / AstronawNeeds)
    
    if (numberAstr >= 3 && numberAstr <= 10) {
        console.log(`The spacecraft holds ${numberAstr} astronauts.`)
    } else if (numberAstr < 3) {
        console.log(`The spacecraft is too small.`)
    } else if(numberAstr > 10) {
        console.log(`The spacecraft is too big.`)
    }
    

}
solve([ '3.5', '4', '5', '1.70' ])