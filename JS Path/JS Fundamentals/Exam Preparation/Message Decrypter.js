function solve(arr) {
    let messages = arr.shift()


    for (let line of arr) {


        let message = line.split(' ')[0]
        let decryptMes = line.split(' ')[1].split('|')
        let tag = message.slice(1, -2)
        let messageLength = message.length


        let count = 0
        if ((message[0] == '$' && message[messageLength - 2] == '$') || (message[0] == '%' && message[messageLength - 2] == '%')) {


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
                    console.log(`${tag}: ${name}`);
                }

            } 
        } else {
            console.log('Valid message not found!')
        }
    }
//NOT READY

}
solve([
    '4',
    '$Request$: [73]|[115]|[105]|',
    '%Taggy$: [73]|[73]|[73]|',
    '%Taggy%: [118]|[97]|[108]|',
    '$Request$: [73]|[115]|[105]|[32]|[75]|',

])