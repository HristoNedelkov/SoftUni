function solve(str) {
    return str.match(/[A-z0-9][a-z0-9]+/g).join(', ')
    
}
console.log(solve('SplitMeIfYouCanHaHaYouCantOrYouCan'))