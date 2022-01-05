function solve(arr) {
    let n = arr.shift()
    let pat = /^(\$|\%)([A-Z][a-z]+)\1: ((\[\d*\]\|){3})$/
    
    
    for (const el of arr) {
        if (el.match(pat)) {
            let mess = el.match(pat)
            let tag = mess[2]
            if (tag.length <= 3) {
                console.log('Valid message not found!')
            } else {
                let numbers = mess[3].match(/\[(\d*)\]\|\[(\d*)\]\|\[(\d*)\]\|/)
                numbers = numbers.splice(1,3)
                let text = numbers.map(el => String.fromCharCode(el)).join('')
                console.log(`${tag}: ${text}`)

            }
        } else {
            console.log('Valid message not found!')
        }
    }
}
console.log(solve([
    '4',
    '$Request$: [73]|[115]|[105]|',
    '%Taggy$: [73]|[73]|[73]|',
    '%Taggy%: [118]|[97]|[108]|',
    '$R']))