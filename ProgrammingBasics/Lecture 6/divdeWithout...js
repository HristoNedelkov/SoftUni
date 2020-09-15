function divide (input) {
    let totalNumber = +input.shift()
    
    let p1 = 0
    let p2 = 0
    let p3 = 0



    for (let i = 1; i <= totalNumber; i++) {
        let number = +input.shift()


        if (number % 2 === 0) {
            p1++
        }
    
        if (number % 3 === 0) {
            p2++
        }
        if (number % 4 === 0) {
            p3++
        }
    
    
    
    }


    let p1p = (p1/totalNumber)* 100
    let p2p = (p2/totalNumber)* 100
    let p3p = (p3/totalNumber)* 100



    console.log(`${p1p.toFixed(2)}%`)
    console.log(`${p2p.toFixed(2)}%`)
    console.log(`${p3p.toFixed(2)}%`)
}