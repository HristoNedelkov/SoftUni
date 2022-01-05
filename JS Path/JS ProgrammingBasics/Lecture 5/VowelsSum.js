function solve (input) {

    let string = input.shift()

    let totalSum = 0
    for (let i = 0; i<= string.length; i++) {
        let char = string[i]
        switch (char) {


        case 'a':{
            totalSum++
        }
            break;
            case 'e': {
                totalSum += 2
            }
                break
                case 'i': {
                    totalSum += 3
                }
                    break
                    case 'o': {
                        totalSum += 4
                    }
                        break
                        case 'u': {
                            totalSum += 5
                        }
                        break;



        }


    }

console.log(totalSum)
}

solve([ ""])