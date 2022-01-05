function solve(str) {
    let pairs = str.match(/([\#|\@])[A-z]+\1{2}[A-z]+\1/g)
    pairs = pairs.map(e => e.split(/\@|\#/))
    let lengthOfAll = pairs.length
let mirrorWo = []

    for (const pair of pairs) {
        let isMirror = true
        let i = pairs.indexOf(pair)
        pair.splice(2, 1)
        pair.pop()
        pair.shift()
        

        if (pair[0].length < 3) {
            pairs.splice(i, 1)
        }

        if (pair[0] != pair[1].split('').reverse().join('')) {
            isMirror = false
            pairs.splice(i, 1)
        } else {
            mirrorWo.push(pair.filter(e => e != ''))

        }
        
    }

    return `${lengthOfAll} word pairs found!
    The mirror words are:
    ${mirrorWo}`
    

}
console.log(
    solve(

        '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r	'


    ))