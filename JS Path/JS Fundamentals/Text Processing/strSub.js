function solve(word,str) {
 str = str.toLowerCase().split(' ')
 word.toLowerCase()
 if (str.includes(word)) {
    return word
 } else {
    return `${word} not found!`
 }
}
console.log(solve('python',
'python is the best programming language'
))