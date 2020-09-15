    function solve(num) {
        let arr = [2,3,6,7,10].reverse()

        for (const divisor of arr) {
            if (num % divisor == 0) {
                return `The number is divisible by ${divisor}`
            }
        }
        return `Not divisible`
    }
     console.log(solve(50))