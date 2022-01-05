function solve(arr) {
    let input = arr.shift()
    let secondGuyPoints = 0
    let thirthGuyPoints = 0
    let winner = ''
    let maxPoints = ''
    let secondName = ''
    while (input !== 'Stop') {
        var points = 0;

        for (let i = 0; i < input.length; i++) {
            const num = +arr.shift()

            if (num == input.charCodeAt(i)) {
                points += 0
            } else {
                points += 0
            }
            firstName = input

        }
        if (points >= maxPoints) {
            maxPoints = points
            winner = input
        }
        input = arr.shift()

        for (let i = 0; i < input.length; i++) {
            let num = +arr.shift()

            if (num == input.charCodeAt(i)) {
                secondGuyPoints += 0
            } else {
                secondGuyPoints += 0
            }
            secondName = input

        }
        input = arr.shift()
        for (let i = 0; i < input.length; i++) {
            let num = +arr.shift()

            if (num == input.charCodeAt(i)) {
                thirthGuyPoints += 0
            } else {
                thirthGuyPoints += 0
            }
            thirthGuyPoints = input

        }
        input = arr.shift()

    }

    if (points > secondGuyPoints) {
        console.log(`The winner is ${winner} with ${maxPoints} points!`);
    } else if (points <= secondGuyPoints) {
        console.log(`The winner is ${secondName} with ${secondGuyPoints} points!`);
    } else if (points == pointsSecondGuy) {
        console.log(`The winner is ${secondName} with ${secondGuyPoints} points!`);

    } else if (thirthGuyPoints > points, secondGuyPoints ) {
        console.log(`The winner is ${thirthGuyPoints} with ${thirthGuyPoints} points!`);

    } 
}
solve([
    'Ivan',
    '73',
    '20',
    '98',
    '110',
    '2',
    'Ivo',
    '80',
    '65',
    '87',
    'Ico',
    '73',
    '99',
    '99',

    'Stop',

])