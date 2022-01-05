function christmasDecoration (input) {
let budget = +input.shift()
let inputLine = input.shift()
let isEOkey = true
while (inputLine !== 'Stop') {
    let sum = 0
    let decoration = inputLine
    for (let i = 0; i < decoration.length; i++) {
        let char = decoration[i]
        sum += char.charCodeAt()
       
        if (budget >= sum) {
            budget -= sum
            console.log(`Item successfully purchased!`)
            inputLine = input.shift()
        } else {
            isEOkey = false 
            break;
        }
     
    }
 
}
if (isEOkey) {
    console.log(`Money left: ${budget}`)

} else {
    console.log(`Not enaugh money!`)
}
}






christmasDecoration ([
'5000',
'Christmas lights',
'Wreath',
'Stop',
    
   
])