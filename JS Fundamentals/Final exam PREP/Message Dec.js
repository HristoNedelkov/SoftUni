function solve(arr) {
    let messages = arr.shift()
    let pat = /(\$|\%)([A-Z]([a-z]*){2})\1: (\[\d*\]\|){3}/g
//    let pat = //

    for (let line of arr) {
        line = line.split(' ')[0]
        let count = 0
         
        if (line.match(pat)) {


            var name = ''
            for (const num of decryptMes) {
                var breaked = false
                let number = +num.slice(1, -1)
                if (Number.isInteger(number)) {


                    name += String.fromCharCode(number)
                    count++
                } else {
                    breaked = true
                    break
                }
            }
            if (breaked) {
                console.log('Valid message not found!');
                
            } else {
                if (count > 4) {
                    console.log('Valid message not found!');
                } else {
                  //  console.log(`${tag}: ${name}`);
                }

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
    '$R']
    ))