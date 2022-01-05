function solve(arr) {
let pat = /\#[A-z]+/g
let res =  arr.match(pat)
 return res.map((el) => el.slice(1,el.length)).join("\n")
}
console.log(solve('Nowadays everyone uses # to tag a #special word in #socialMedia'));