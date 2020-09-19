function anagrams(word, words) {
    let res = []
    word = word.split('').sort( ).join('')
    

    for (const item of words) {

        
        item.split('').sort().join('') == word ? res.push(item): ''



    }
    return res

}
console.log(
    anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])
)