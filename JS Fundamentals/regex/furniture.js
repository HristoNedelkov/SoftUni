function solve(arr) {
    arr = arr.join(' ')
    let pat = /\>{2}([A-Z]*[a-z]*)\<{2}(\d+\.*\d*)\!(\d+)/g
    arr = arr.match(/\>{2}([A-Z]*[a-z]*)\<{2}(\d+\.*\d*)\!(\d+)/g)
    let totalMoney = 0
    console.log("Bought furniture:")    
    for (let word of arr) {
        let match = word.match(/\>{2}([A-Z]*[a-z]*)\<{2}(\d+\.*\d*)\!(\d+)/)
        console.log(match[1])
       
        totalMoney += match[3] == 0?+match[2]:+match[2] * +match[3]
    }
    return `Total money spend: ${totalMoney}`
    
}
console.log(solve([ '>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase' ]
    ))