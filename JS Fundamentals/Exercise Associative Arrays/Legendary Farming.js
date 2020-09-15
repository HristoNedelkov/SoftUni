function solve(materials) {

    let keyMaterials = {
            fragments: 0,
            shards: 0,
            motes: 0
    }
    let junkMaterials = {}
    let out = false

    let itemsArr = materials.split(' ')
    let timesRepeat = itemsArr.length
    let legendaryItem = ''
    for (let i = 1; i <= timesRepeat / 2; i++) {
        let countItem = +itemsArr.shift()
        let nameOfTheItem = itemsArr.shift().toLocaleLowerCase()


        if (nameOfTheItem == "shards" || nameOfTheItem == 'fragments' || nameOfTheItem == 'motes') {
            if (keyMaterials.hasOwnProperty(nameOfTheItem)) {
                keyMaterials[nameOfTheItem] += countItem
                if (keyMaterials[nameOfTheItem] >= 250) {
                    out = true
                }
            } else {
                keyMaterials[nameOfTheItem] = countItem
            }
        } else {
            if (junkMaterials.hasOwnProperty(nameOfTheItem)) {
                junkMaterials[nameOfTheItem] += countItem
            } else {
                junkMaterials[nameOfTheItem] = countItem
            }
        }
        if (out) {
            break
        }

    }

    for (const name in keyMaterials) {
        let count = keyMaterials[name]

        if (count >= 250) {


            switch (name) {
                case 'shards':
                    legendaryItem = 'Shadowmourne'
                    keyMaterials.shards -= 250

                    break;
                case 'fragments':
                    legendaryItem = 'Valanyr'
                    keyMaterials.fragments -= 250

                    break;
                case 'motes':
                    legendaryItem = 'Dragonwrath'
                    keyMaterials.motes -= 250
                    break;
            }
        }

    }


    let sortalbleKeyM = []
    let sortableJunkM = []
    for (const name in keyMaterials) {
        sortalbleKeyM.push([name, keyMaterials[name]])
    }
    for (const name in junkMaterials) {
        sortableJunkM.push([name, junkMaterials[name]])
    }

    sortalbleKeyM.sort(function (a, b) {
        return b[1] - a[1] || a[0].localeCompare(b[0])
    })
    sortableJunkM.sort()




    console.log(`${legendaryItem} obtained!`);


    for (const line of sortalbleKeyM) {
        let row = line.join(': ')
        console.log(row);

    }
    for (const line of sortableJunkM) {
        let row = line.join(': ')
        console.log(row);

    }

}
solve('7 motes 98 fosh 2 jeleza 2260 fragments 8 iujp 789 lah 213 jeleza')



//TODO  C:\Users\ico19\Desktop\JS Fundamentals\Exercise Associative Arrays
