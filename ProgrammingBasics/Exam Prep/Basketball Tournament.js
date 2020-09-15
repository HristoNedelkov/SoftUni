function solve(arr) {

    let curLine = arr.shift()

    let wins = 0
    let losess = 0

    while (curLine !== 'End of tournaments') {
        let nameOfTheTour = curLine
        let matches = +arr.shift()

        for (let match = 1; match < matches + 1; match++) {
            let pointsDesi = +arr[0]
            let pointsOtherTeam = +arr[1]
            arr.shift()
            arr.shift()

            if (pointsDesi > pointsOtherTeam) {
                let differesence = pointsDesi - pointsOtherTeam
                console.log(`Game ${match} of tournament ${nameOfTheTour}: win with ${differesence} points.`);
                wins++
            } else {
                let differesence = pointsOtherTeam - pointsDesi
                console.log(`Game ${match} of tournament ${nameOfTheTour}: lost with ${differesence} points.`);
                losess++

            }
        }


        curLine = arr.shift()
    }
    let all = wins + losess

    let winPer = (wins / all) * 100
    let lossPer = (losess / all) * 100
    console.log(`${winPer.toFixed(2)}% matches win`);
    console.log(`${lossPer.toFixed(2)}% matches lost`);



}





solve(['Dunkers',
    '2',
    '75',
    '65',
    '56',
    '73',
    'Fire Girls',
    '3',
    '67',
    '34',
    '83',
    '98',
    '66',
    '45',
    'End of tournaments'])