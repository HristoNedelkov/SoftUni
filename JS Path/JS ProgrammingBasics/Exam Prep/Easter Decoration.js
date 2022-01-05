function solve(arr) {
    const basket = 1.5
    const wreath = 3.80
    const chocolateBunny = 7

    let numClients = Number(arr.shift())
    let currLine = arr.shift()
    
    let allClientBill = 0

    for (let i = 1; i <= numClients; i++) {
        let clientBill = 0
        let count = 0
        while (currLine != 'Finish') {

            switch (currLine) {
                case 'basket':
                    clientBill += basket
                    count++
                    break;
                case 'wreath':
                    clientBill += wreath
                    count++
                    break;
                case 'chocolate bunny':
                    clientBill += chocolateBunny
                    count++
                    break;

                default:
                    break;
            }
            currLine = arr.shift()
        }
        currLine = arr.shift()
        if (count % 2 == 0) {
            clientBill -= clientBill * 0.2
        }
        console.log(`You purchased ${count} items for ${clientBill.toFixed(2)} leva.`)
      
        allClientBill += clientBill
    }
    console.log(`Average bill per client is: ${(allClientBill / numClients).toFixed(2)} leva.`)
}

solve([
    '1',
    'basket',
    'wreath',
    'chocolate bunny',
    'wreath',
    'basket',
    'chocolate bunny',
    'Finish'
  ]
  )