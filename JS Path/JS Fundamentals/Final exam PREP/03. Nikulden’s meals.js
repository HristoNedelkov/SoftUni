function solve(arr) {
    let liked = {}
    let unlikedMeals = 0
    for (let row of arr) {
        row = row.split('-')
        let [comm, name, meal] = [...row]

        if (comm === 'Like') {
            if (!liked.hasOwnProperty(name)) {
                liked[name] = ([meal])
            } else {
                liked[name].push(meal)
            }
        } else if (comm === 'Unlike') {
            if (liked.hasOwnProperty(name)) {
                if (liked[name].includes(meal)) {
                    unlikedMeals++
                    let i = liked[name].indexOf(meal)
                    liked[name].splice(i, 1)
                    console.log(`${name} doesn't like the ${meal}.`)

                } else if(!liked[name].includes(meal)) {
                    console.log(`${name} doesn't have the ${meal} in his/her collection.`)
                }
            } else {
                console.log(`${name} is not at the party.`)
            }
        }
    }
    let likedArray = []
    likedArray = Object.entries(liked)
    likedArray.sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]))
    for (const line of likedArray) {
        console.log(`${line[0]}: ${line[1].join(', ').trim()}`)
    }
    console.log(`Unliked meals: ${unlikedMeals}`)
}
console.log(solve([
    'Like-Mike-frenchFries',
    'Like-Mike-salad',
    'Like-George-fruit',
    'Like-Steven-salad',
    'Unlike-Steven-salad',
    'Unlike-Steven-fruit',
    'Stop'
]));