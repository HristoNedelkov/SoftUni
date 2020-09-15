function solve(arr) {
    let curr = arr.shift()
    
    for (let line of arr) {
        line = line.split(':')
        let comm = line.shift()
        
        if (comm === 'Add Stop') {
            let [i, str] = [...line]
            if (i >= 0 && i < curr.length) {
                curr = curr.split('')
                curr.splice(i, 0, str)
                curr = curr.join('')
            }
            console.log(curr)
        } else if (comm === 'Remove Stop') {
            let [sIndex , endIndex] = [...line]
            if (sIndex >= 0&& endIndex >= 0 &&sIndex < curr.length && endIndex < curr.length) {
                curr = curr.split('')
                curr.splice(sIndex,endIndex - sIndex + 1)
                curr = curr.join('')
                console.log(curr)
            } else {

            }
        } else if (comm === 'Switch') {
            let [oldStr,newStr] = [...line]
            if (curr.includes(oldStr)) {
               curr = curr.replace(oldStr, newStr)
                console.log(curr)
            }
        }



    }
    return `Ready for world tour! Planned stops: ${curr}`
}
console.log(solve([
    'Hawai::Cyprys-Greece',
    'Add Stop:7:Rome',
    'Remove Stop:11:16',
    'Switch:Hawai:Bulgaria',
    'Travel'
]
));