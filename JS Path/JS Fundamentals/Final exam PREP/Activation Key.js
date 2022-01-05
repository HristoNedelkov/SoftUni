function solve(arr) {
    let contain = /Contains\>{3}(\S+)/
    let flip = /Flip(\>{3})(Upper|Lower)\1(\d*)\1(\d*)/
    let slice = /Slice(\>{3})(\d*)\1(\d*)/
    let key = arr.shift()
    for (let line of arr) {
        if (line.match(contain)) {
            let a = [...line.match(contain)]
            let substring = a[1]
            let text1 = `${key} contains ${substring}`
            let text2 = `Substring not found!`
            console.log(key.includes(substring) ? text1 : text2)
        } else if (line.match(flip)) {
            let a = [...line.match(flip)]
            let UpOrDown = a[2]
            let startI = +a[3]
            let endI = +a[4]            
            if (UpOrDown == "Upper") {
                key = key.split('')
                for (let i = startI; i < endI; i++) {
                    let char = key[i].toUpperCase()
                    key[i] = char
                }
                key = key.join('')
                console.log(key)
            } else {
                key = key.split('')
                for (let i = startI; i < endI; i++) {
                    let char = key[i].toLowerCase()
                    key[i] = char
                }
                key = key.join('')
                console.log(key)
            }            
        } else if (line.match(slice)) {
            let a = [...line.match(slice)]
            let indexS = +a[2]
            let indexE = +a[3]
            let count = indexE - indexS
            key = key.split('')
            key.splice(indexS,count)
            key = key.join('')
            console.log(key)
        }
    }
    return `Your activation key is: ${key}`
}

console.log(solve([
    '134softsf5ftuni2020rockz42',
    'Slice>>>3>>>7',
    'Contains>>>-rock',
    'Contains>>>-uni-',
    'Contains>>>-rocks',
    'Flip>>>Upper>>>2>>>8',
    'Flip>>>Lower>>>5>>>11',
    'Generate'
  ]))
