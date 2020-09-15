function sum (input) {
let firstNum = +input.shift()
let secondNum = +input.shift()

let printLine = ''

  for (let i = firstNum; i <= secondNum; i++) {

    let currentNum = '' + i
    let oddSum = 0
    let evenSum = 0
        
        for (let j = 0; j < currentNum.length; j++) {
            let currentDigit = currentNum.charCodeAt(j)
       
       
            if (j % 2 == 0) { 
                evenSum+=currentDigit
            } else {
                oddSum+=currentDigit
            }
        }
        
          if (oddSum == evenSum) {
              printLine += i + ' '
          } 
        }
        console.log(printLine)
  }


sum([

   '100000',
   '100050',
      


])