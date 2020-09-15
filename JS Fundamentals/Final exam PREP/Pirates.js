function solve(arr) {
    let towns = {}
    let line = arr.shift()
    while (line != 'Sail') {
        let [name, popul, gold] = line.split('||')
        popul = Number(popul)
        gold = Number(gold)
        if (towns.hasOwnProperty(name)) {
            towns[name][0] += popul
            towns[name][1] += gold
        } else if (!towns.hasOwnProperty(name)) {
            towns[name] = [popul, gold]
        }
        line = arr.shift()
    }

    while (line != 'End') {

        let [comm, name, people, gold] = line.split('=>')
        people = Number(people)
        gold = Number(gold)
        
        if (comm === 'Plunder') {
            towns[name][0] -= people
            towns[name][1] -= gold
            
            console.log(`${name} plundered! ${gold} gold stolen, ${people} citizens killed.`);
            if (towns[name][0] == 0 || towns[name][1] == 0) {
                console.log(`${name} has been wiped off the map!`);
                delete towns[name]
            }
        } else if (comm === 'Prosper') {
            let [comm, name, gold] = line.split('=>')
            gold = Number(gold)

            if (gold < 0) {
                console.log("Gold added cannot be a negative number!");
            } else {
                towns[name][1] += gold
                console.log(`${gold} gold added to the city treasury. ${name} now has ${towns[name][1]} gold.`)
            }

        }

        line = arr.shift()
    }
    if (towns == {}) {
       
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    } else {
        towns = Object.entries(towns)
        let count = towns.length
        
        towns.sort((a,b) => b[1][1] - a[1][1] || a[0].localeCompare(b[0])  )
    
        console.log(`Ahoy, Captain! There are ${count} wealthy settlements to go to:`)
        for (const line of towns) {
            console.log(`${line[0]} -> Population: ${line[1][0]} citizens, Gold: ${line[1][1]} kg`);
        }
    }
   
}
console.log(solve([
    'Nassau||95000||1000',
    'San Juan||930000||1250',
    'Campeche||270000||690',
    'Port Royal||320000||1000',
    'Port Royal||100000||2000',
    'Sail',
    'Prosper=>Port Royal=>-200',
    'Plunder=>Nassau=>94000=>750',
    'Plunder=>Nassau=>1000=>150',
    'Plunder=>Campeche=>150000=>690',
    'End'
]
));