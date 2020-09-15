function oddAndEvenSum(number) {
    const allEvenDigits = getEvenDigits(number)
    const allOddDigits = getOddDigits(number)

    const evenSum = getSum(allEvenDigits)
    const oddSum = getSum(allOddDigits)
   
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
    
    function getEvenDigits(number) {
        
            let evenDigits = []
        number.toString().split('').forEach((digit) => {

            let currentNum = Number(digit)

            if (currentNum % 2 === 0) {
                evenDigits.push(currentNum);
            }


        });
        return evenDigits
        


    }

    function getOddDigits (number) {

        let OddDigits = []
        number.toString().split('').forEach((digit) => {

            let currentNum = Number(digit)

            if (currentNum % 2 !== 0) {
                OddDigits.push(currentNum);
            }


        });
        return OddDigits

    }

    function getSum (arr) {
        let sum = 0
        
        for (let index = 0; index < arr.length; index++) {
            let element = arr[index];
           sum += element 
        }
        return sum
        }
            
}


oddAndEvenSum (2356209483562045)


//Odd sum = 9, Even sum = 4