function sum (input) {
    let num = (input).toString()
    sumNumbers = 0
    for (let i = 0; i <= num.length - 1; i++) {
        
        let digit = num[i]
        sumNumbers += +digit

    }
        console.log(sumNumbers);
        

}
