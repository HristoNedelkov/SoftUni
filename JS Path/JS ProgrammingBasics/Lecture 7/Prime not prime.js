function solve(arr) {

    function isPrime(num) {
        for (var i = 2; i < num; i++) {
            if (num % i === 0) return false;
        }
        return num > 1;
    }
    let primeSum = 0
    let NonPrimeSum = 0
    let currLine = arr.shift()
    while (currLine != 'stop') {
        currLine = Number(currLine)
        if (currLine < 0) {
            console.log(`Number is negative.`)
        } else {

            if (isPrime(currLine) == true) {
                primeSum += currLine
            } else {
                NonPrimeSum += currLine
            }
        }
        currLine = arr.shift()
    }
    console.log(`Sum of all prime numbers is: ${primeSum}`)
    console.log(`Sum of all non prime numbers is: ${NonPrimeSum}`)
}
solve([
    '3', '9',
    '0', '7',
    '19', '4','-123',
    'stop', '', 

])
