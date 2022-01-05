function solve(arr) {
    let arra = []
    for (const line of arr) {
        arra.push(JSON.parse(line))
    }
    let res = {}
    for (let obj of arra) {
        let objKey = Object.keys(obj)[0]
        let objValue = Object.values(obj)[0]
        res[objKey] = objValue
    }
    let result = []
    for (let key in res) {
        let val = res[key]
        result.push([key, val])
    }
    result.sort((a, b) => a[0].localeCompare(b[0]))
    for (let obj of result) {
        console.log(`Term: ${obj[0]} => Definition: ${obj[1]}`)
    }
}

console.log(solve([
    '{"Coffee":"Twa e kafe."}',
    '{"Bus":"Twa e kola."}',
    '{"Bus":"Twa e Avtomobil"}'
]))