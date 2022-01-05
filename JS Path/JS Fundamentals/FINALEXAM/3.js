function solve(arr) {
    let n = arr.shift()
    let obj = {}
    let countRatings = {}
    for (let i = 1; i <= n; i++) {
        let line = arr.shift().split('<->')
        let [plant, rare] = [...line]
        rare = Number(rare)
        if (obj.hasOwnProperty(plant)) {
            obj[plant][0] += rare
        } else {

            obj[plant] = [rare]
        }
    }
    line = arr.shift()
    while (line != "Exhibition") {
        line = line.split(': ')
        let [comm, plantThings] = [...line]
        plantThings = plantThings.split(' - ')
        
     if(obj.hasOwnProperty(plantThings[0]) || comm != 'Rate' || comm != 'Update' || comm != 'Reset'){   

        if (comm === 'Rate') {
            let [plant, rate] = [...plantThings]
            rate = Number(rate)
            if (obj[plant][1] == undefined) {
                obj[plant].push(rate)

            } else {
                obj[plant][1] += rate
            }


            if (countRatings.hasOwnProperty(plant)) {

                countRatings[plant] += 1
            } else {
                countRatings[plant] = 1
            }
        } else if (comm === 'Update') {
            let [plant, rare] = [...plantThings]
            rare = Number(rare)
            obj[plant][0] = rare
        } else if (comm === 'Reset') {
            let [plant] = [...plantThings]
            countRatings[plant] = 0
            obj[plant][1] = 0
        }
    } else {
        console.log('error');
    }
        line = arr.shift()
    }
    let array = Object.entries(obj)
    for (let line of array) {
        let i = array.indexOf(line)
        let name = line[0]
        let count = +countRatings[name]
        if (count != 0) {
            array[i][1][1] = +array[i][1][1] / count
        }
    }
 
    array = array.sort((a, b) => b[1][0] - a[1][0] || b[1][1] - a[1][1])

    console.log(`Plants for the exhibition:`)
    for (const line of array) {
        let name = line[0]
        console.log(`- ${name}; Rarity: ${line[1][0]}; Rating: ${(line[1][1]).toFixed(2)}`)


    }
}
console.log(solve([
    '3',
    'Arnoldii<->4',
    'Woodii<->7',
    'Welwitschia<->2',
    'Rate: Woodii - 10',
    'Rate: Welwitschia - 7',
    'Rate: Arnoldii - 3',
    'Rate: Woodii - 5',
    'Update: Woodii - 5',
    'Reset: Arnoldii',
    'Exhibition'
]
));