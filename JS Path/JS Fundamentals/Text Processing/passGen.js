
function solve(arr) {
    let pass = arr.shift() + arr.shift().toLowerCase()
    let vowels = pass.match(/[aeiou]/g)
    let thirdStr = arr.shift()
    let numV = vowels.length
    for(let i = 1;i <= 10;i+=2) {
        thirdStr += thirdStr
    }
   thirdStr = thirdStr.split('').map(e=> e.toUpperCase())
   

    for(let i = 1;i <= numV;i++) {
        let sym = thirdStr.shift()
        pass = pass.replace(/[aeiou]/,sym)
        vowels.shift()

        
    }
return `Your generated password is ${pass.split('').reverse().join('')}`

}
console.log(solve([
    'ga3bi', 'dumi3',
    'orange'
]
));