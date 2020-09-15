function exam(input) {
    let inputOfbadGrades = +input.shift()

    let countForBadGredas = 0
    let sumGrades = 0
    let counterForGrades = 0

    let lastProblem = ""
    let averageScore = 0;
    while (inputOfbadGrades > countForBadGredas) {

        let NameOfTheEX = input.shift()
        let grade = +input.shift()
        if (NameOfTheEX == "Enough") {
            
            averageScore = sumGrades /(countForBadGredas + counterForGrades)
            break;

        } else {
            sumGrades = sumGrades + grade
            
        }
                                                                
    
        if (grade >= 4) {
            counterForGrades++

        } else {
            countForBadGredas++
        }

            lastProblem = NameOfTheEX


    }



    if (countForBadGredas == inputOfbadGrades) {
        console.log(`You need a break, ${countForBadGredas} poor grades.`)
    } else {
        console.log(`Average score: ${averageScore.toFixed(2)}`)
            console.log(`Number of problems: ${counterForGrades + countForBadGredas}`)
            console.log(`Last problem: ${lastProblem}`)
    }




}


exam([
    '2', 
    
    'Money',
    '6', 
    
    'Story',
    '4', 
    
    'Spring Time',
    '5',
    
    'Bus',
    '2', 
    "gosho",
    "6",
    'Enough',
    ''
  ]
  )



// Average score: 5.25
// Number of problems: 4
// Last problem: Bus