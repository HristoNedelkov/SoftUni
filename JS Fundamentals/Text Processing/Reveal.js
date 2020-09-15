function solve(str) {
    let text = str[0]
    let words = str[1]
    let matches = text.match(/\_+/g)
    let nums = matches.map(e => e.length)
    let wordsLengths = words.map(e => e.length);
    for(let n in nums) {
        let curWordLength = text.match(/\_+/)[0].length        
        text = text.replace(/\_+/, words[wordsLengths.indexOf(curWordLength)])
}
return text
}
console.log(solve(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
))