function solve(str) {
    str = str.join()
    let patEmojis = /(\*\*|\:\:)[A-Z][a-z]{2,}\1/g

    let emojis = str.match(patEmojis)
    let emojiss = emojis.join(' ')
    emojiss = emojiss.match(/[A-Z][a-z]{2,}/g)
    let coolEmojisCount = emojis.length
    let numbers = str.match(/\d/g)
    let toBeCool = numbers.reduce((a, b) => +a * (+b))
    let coolWords = []
    for (let emoji of emojiss) {
        let n = 0
        let index = emojiss.indexOf(emoji)
        for (let i in emoji) {
            let char = emoji[i]
            char = emoji.charCodeAt(i)
            n += +char

        }
        if (n >= toBeCool) {
            coolWords.push(emojis[index])
        }
    }

    return `Cool threshold: ${toBeCool}
${coolEmojisCount} emojis found in the text. The cool ones are:
${coolWords.join("\n")}`
}
console.log(solve([
    'In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**'
]
));