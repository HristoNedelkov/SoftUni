function solve(input) {
    let N = +input.shift()

    let output = ''
    for (let number = 1111; number <= 9999; number++) {
        let numberAsString = number + ''
        let isSpecial = true
            for (let index = 0; index < numberAsString.length; index++) {
                    let digit = +numberAsString[index]

                    if (N % digit !== 0) {
                        isSpecial = false
                        break;
                    }
                
                }
    
                    if (isSpecial) {
                        output += number + " "
                    }
            }

                    console.log(`${output}`)
        }

solve ([6])