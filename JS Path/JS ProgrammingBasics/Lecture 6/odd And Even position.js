function solve(input) {
    let n = +input.shift()

    let minEvenNumber = Number.MAX_SAFE_INTEGER
    let maxEvenNumber = Number.MIN_SAFE_INTEGER

    let sumEvenNumbers = 0;
    let sumOddNumbers = 0;

    let minOddNumber = Number.MAX_SAFE_INTEGER
    let maxOddNumber = Number.MIN_SAFE_INTEGER


    for (let position = 1; position <= n; position++) {
        let number = +input.shift()


        if (position % 2 !== 0) {

            sumOddNumbers = sumOddNumbers + number;
            if (number > maxOddNumber) {
                maxOddNumber = number
            }

            if (number < minOddNumber) {
                minOddNumber = number
            }
        } else  {
            sumEvenNumbers += number;


            if (number > maxEvenNumber) {
                maxEvenNumber = number
            }
            if (number < minEvenNumber) {
                minEvenNumber = number
            }
        }

    }

        console.log(`OddSum=${sumOddNumbers.toFixed(2)},`)

        if (minOddNumber !== 9007199254740991) {

            console.log(`OddMin=${minOddNumber.toFixed(2)},`)
        } else {
            console.log(`OddMin=No,`)
        }



        if (maxOddNumber !== -9007199254740991) {

            console.log(`OddMax=${maxOddNumber.toFixed(2)},`)
        } else {
            console.log(`OddMax=No,`)
        }

        console.log(`EvenSum=${sumEvenNumbers.toFixed(2)},`)


        if (minEvenNumber !== 9007199254740991) {

            console.log(`EvenMin=${minEvenNumber.toFixed(2)},`)
        } else {
            console.log(`EvenMin=No,`)

        }

        if (maxEvenNumber !== -9007199254740991) {
            console.log(`EvenMax=${maxEvenNumber.toFixed(2)}`)

        } else {

            console.log(`EvenMax=No`)
        }
    }

solve([ '5', '3', '-2', '8', '11', '-3' ])