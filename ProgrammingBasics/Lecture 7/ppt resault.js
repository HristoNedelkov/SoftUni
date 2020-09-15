function solve (input) {
    let jury = +input.shift()
    let prasentation = ''
    let currentLine = input.shift()
    
    let sumAll = 0
    let steps = 0
    while (currentLine !== 'Finish') {
        
        let prasentation = currentLine
        let sumOfgrades = 0
         for (let step = 1; step <= jury; step++) {
            let currentJuryGrade = +input.shift()
            sumOfgrades += currentJuryGrade    
            sumAll += currentJuryGrade
            steps++
        }
      
        console.log(`${prasentation} - ${(sumOfgrades / jury).toFixed(2)}.`)
        currentLine = input.shift()
    }
    let resaultAll = sumAll / steps
    console.log(`Student's final assessment is ${resaultAll.toFixed(2)}.`)

}


solve ([
'3',
'Fizika',
'6.00',
'5.50',
'2.50',
'For-Loop',
'5.84',
'5.66',
'5.50',
'Finish'
])