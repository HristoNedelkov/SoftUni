function solve(arr) {
    let shirochina = +arr.shift()
    let duljina = +arr.shift()
    let wisochina = +arr.shift()

    let currLine = arr.shift()
    let prostranstwo = shirochina * duljina * wisochina

    let computres = 0
    let left = 0
    while (currLine != 'Done') {
        currLine = +currLine
        computres += currLine

        if (computres > prostranstwo) {
            left = computres - prostranstwo
            console.log(`No more free space! You need ${left} Cubic meters more.`)
            return
        }
        currLine = arr.shift()
    }
    
    let have = prostranstwo - computres
    console.log(`${have} Cubic meters left.`);
    

}

solve([
    '10', '10', '2',
    '20', '20', '20',
    '20', '122', ''
])