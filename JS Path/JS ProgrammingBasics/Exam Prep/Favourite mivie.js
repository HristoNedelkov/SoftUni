function solve(arr) {
    let filmName = arr.shift()
    let bigChar = filmName.length
    let smallChar = filmName.length * 2
    let bestFilmName = ''
    let bestFilmSum = 0
    let count = 0
    while (filmName != 'STOP') {
        let currentSum = 0
        if (count > 7) {
            console.log("The limit is reached.");
            break
        }
        for (const i in filmName) {
            let char = filmName[i]

            if (char == ' ') {
                continue
            } else {
                // currentSum += filmName.charCodeAt(i)
                if (char == char.toUpperCase()) {
                    let minus = filmName.charCodeAt(i) - bigChar
                    currentSum += minus
                } else {
                   let minus = filmName.charCodeAt(i) - smallChar
                    currentSum += minus
                }
            }
        }
        if (currentSum > bestFilmSum) {
            bestFilmSum = currentSum
            bestFilmName = filmName
        }
        filmName = arr.shift()
        count++
    }
    console.log(`The best movie for you is ${bestFilmName} with ${bestFilmSum} ASCII sum.`);

}

solve([
    'Matrix',
    'Breaking bad',
    'Legend',
    'STOP',

])
