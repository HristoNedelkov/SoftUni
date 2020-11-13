async function solve () {
    let text = await fetch('https://swapi.dev/api/people/1/')
    .then(res => res.json())
    .then(data)
    .catch(e => e)
console.log(text)
}
solve()
console.log('azzz')