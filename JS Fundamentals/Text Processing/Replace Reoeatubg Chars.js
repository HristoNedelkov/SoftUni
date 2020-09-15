function solve(str) {
    let pat = /([A-z])\1*/g
    let  mat =str.match(pat)
    return mat.map((el)=> el[0]).join('')
}
console.log(solve('aaaaabbbbbcedddeeeedssaa'))