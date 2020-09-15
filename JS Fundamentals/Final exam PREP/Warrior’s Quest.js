function solve(arr) {

    let str = arr.shift()
    let line = arr.shift()

    while (line != 'For Azeroth') {
        let command = line.split(' ')[0]


        switch (command) {
            case 'GladiatorStance':
                str = str.toUpperCase()
                console.log(str)
                break;

            case 'DefensiveStance':
                str = str.toLowerCase()
                console.log(str)

                break;

            case 'Dispel':
                let i = line.split(' ')[1]
                i = +i
                let letter = line.split(' ')[2]

                if (i < 0 || i > str.length - 1 ) {
                    console.log('Dispel too weak.')
                } else {
                    str = str.split('')
                    str.splice(i, 1, letter)
                    str = str.join('')
                    console.log(`Success!`)
                }
                break;

            case 'Target':
                let secComand = line.split(' ')[1]
                if (secComand == 'Change') {
                    let subStr = line.split(' ')[2]
                    let secSubStr = line.split(' ')[3]

                    if (str.includes(subStr)) {
                        str = str.replace(subStr, secSubStr)
                    }
                    console.log(str);


                } else if (secComand == 'Remove'){
                    let subStr = line.split(' ')[2]
                    if (str.includes(subStr)) {

                    str = str.replace(subStr, '')
                    console.log(str)
                }
            }
                break;

            default:
                console.log(`Command doesn't exist!`)
                break;
        }
        line = arr.shift()
    }
}
solve([
    'fr1c710n',
    'GladiatorStance',
    'Dispel 2 I',
    'Dispel 4 T',
    'Dispel 6 O',
    'Dispel 5 I',
    'Dispel 10 I',
    'Target Change RICTION riction',
    'For Azeroth'
])