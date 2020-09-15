function solve(arr) {
    let employees = []
    for (const personName of arr) {
        
        let personObject = {
            name: personName,
            personalNumber: personName.length
        }

        
        employees.push(personObject)
        
    }

for (const employee of employees) {
    console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`)
}

    
}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal',
    'Kirchakis Mantalqkis',
    'Hristiakis'
]
)




    //Name: Silas Butler -- Personal Number: 12
// Name: Adnaan Buckley -- Personal Number: 14
// Name: Juan Peterson -- Personal Number: 13
// Name: Brendan Villarreal -- Personal Number: 18
