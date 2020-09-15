function solve(arr) {
    let nWorriors = arr.shift()
    let objWorriors = {}
    for (let index = 1; index <= nWorriors; index++) {
        let currWorriorLine = arr.shift().split(' ')
        let [currWorrior, currWorriorHP, currWorriorMP] = [currWorriorLine[0], currWorriorLine[1], currWorriorLine[2]]
        objWorriors[currWorrior] = [+currWorriorHP, +currWorriorMP]

    }


let line = arr.shift()

    while (line != 'End') {
        
        let Sline = line.split(' - ')

        let command = Sline[0]
        let name = Sline[1]

        if (command == 'CastSpell') {
            let MPNeeded = +Sline[2]
            let spellName = Sline[3]
            if (objWorriors[name][1] - MPNeeded >= 0) {
               
                objWorriors[name][1] -= +MPNeeded
                console.log(`${name} has successfully cast ${spellName} and now has ${objWorriors[name][1]} MP!`)
            } else {

                console.log(`${name} does not have enough MP to cast ${spellName}!`)
            }
        
        } else if (command == 'TakeDamage') {
            let damage = +Sline[2]
            let attacker = Sline[3]
            objWorriors[name][0] -= damage
            if (objWorriors[name][0] > 0) {
                console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${objWorriors[name][0]} HP left!`)
            }
            if (objWorriors[name][0] <= 0) {
                delete objWorriors[name]
                console.log(`${name} has been killed by ${attacker}!`)
            }


        } else if (command == 'Recharge') {
            let amount = +Sline[2]
            
            if (objWorriors[name][1] + amount <= 200) {
                objWorriors[name][1] += amount
                console.log(`${name} recharged for ${amount} MP!`)
            } else {
                console.log(`${name} recharged for ${  objWorriors[name][1] - 100} MP!`)
                objWorriors[name][1] = 200
            } 

        } else if (command == 'Heal') {
            let amount = +Sline[2]
            if (objWorriors[name][0] + amount > 100)  {
                console.log(`${name} healed for ${100 - objWorriors[name][0] } HP!`)
                objWorriors[name][0] = 100
            } else {
                console.log(`${name} healed for ${amount} HP!`)
                objWorriors[name][0] += amount
            }


        }
        



        line = arr.shift()
    }
    let nameSort = Object.entries(objWorriors).sort((a, b) => a[0].localeCompare(b[0]));
    let hpSort = nameSort.sort((a, b) => b[1][0] - a[1][0]);
    
    
    for (let kvp of hpSort) {
        console.log(kvp[0]);
        console.log(`  HP: ${kvp[1][0]}`);
        console.log(`  MP: ${kvp[1][1]}`);
    }

}
  
console.log(
    solve([
        '4',
        'Adela 90 150',
        'SirMullich 70 40',
        'Ivor 1 111',
        'Tyris 94 61',
        'Heal - SirMullich - 50',
        'Recharge - Adela - 100',
        'CastSpell - Tyris - 1000 - Fireball',
        'TakeDamage - Tyris - 99 - Fireball',
        'TakeDamage - Ivor - 3 - Mosquito',
        'End'
      ])
        )
