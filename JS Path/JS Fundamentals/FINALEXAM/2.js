function solve(str) {
    let pat = /(=|\/)([A-Z][A-z]{2,})\1/g
    let locations = str.matchAll(pat)
    let res = []
    let points = 0
    for (let loc of locations) {
        points += loc[2].length
        res.push(loc[2])
    }
    return `Destinations: ${res.join(', ')}
Travel Points: ${points}`

}
console.log(solve('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i='));