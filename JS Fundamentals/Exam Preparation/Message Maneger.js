function solve(arr) {
    let possibleMessages = +arr.shift()
    let line = arr.shift()
    let obj = {}
    let sortRecieved = {}

    while (line != 'Statistics') {
        let command = line.split('=')[0]


        switch (command) {
            case 'Add':
                let userName = line.split('=')[1]
                let sent = line.split('=')[2]
                let received = line.split('=')[3]
                if (obj.hasOwnProperty(userName)) {

                } else {
                    obj[userName] = +sent 
                    sortRecieved[userName] = +received
                }

                break;
            case 'Message':
                let sender = line.split('=')[1]
                let reciever = line.split('=')[2]
                if (obj.hasOwnProperty(sender) && obj.hasOwnProperty(reciever)) {
                   obj[sender] += 1
                    
                    sortRecieved[reciever] += 1
                }

                if (sortRecieved[reciever] > 10) {
                    console.log(`${reciever} reached the capacity!`)
                    delete sortRecieved[reciever]
                    delete obj[reciever]
                }
                break;
            case 'Empty':
                
            let user = line.split('=')[1]
            if (user == 'All') {
                obj = {}
                sortRecieved = {}
            } else {
            if (obj.hasOwnProperty(user)) {
                    delete obj[user]
                    delete sortRecieved[user]
                }
            }
                break;
                
            default:
                break;
        }
        for (const theName in obj) {
            let counterMessages = +obj[theName]

            if (counterMessages >= possibleMessages) {
                console.log(`${theName} reached the capacity!`)
                delete obj[theName]
                delete sortRecieved[theName]
            }
        }
        line = arr.shift()
    }


    let count = 0
    var sortableRecieved = [];
    let sortableAll = []
    for (let names in sortRecieved) {
        sortableRecieved.push([names, sortRecieved[names]]);
        count++
    }
    
    for (let names in obj) {
        sortableAll.push([names, obj[names]]);
        
    }

    sortableRecieved.sort(function (a, b) {
        return b[1] - a[1];
    });


    console.log(`Users count: ${count}`)
    
    for (const arr of sortableRecieved) {
        let i = sortableRecieved.indexOf(arr)
        let name = arr[0]
        let count = +arr[1]

        const found = sortableAll.find(element => element[0] == name);
       
        console.log(`${name} - ${+found[1] + count}`)
    }

      

}
solve(
    [
        '20',
        'Add=Mark=3=9',
        'Add=Berry=5=5',
        'Add=Clark=4=0',
        'Empty=Berry',
        'Add=Blake=9=3',
        
        'Add=Michael=3=9',
        
        'Add=Amy=9=9',
        'Message=Blake=Amy',
        
        'Message=Michael=Amy',
        
        'Statistics'
      ]
      )


//In this test only Michael is one less!!!
    //    [
    //     '20',
    //     'Add=Mark=3=9',
    //     'Add=Berry=5=5',
    //     'Add=Clark=4=0',
    //     'Empty=Berry',
    //     'Add=Blake=9=3',
    //     'Add=Michael=3=9',
    //     'Add=Amy=9=9',
    //     'Message=Blake=Amy',
    //     'Message=Michael=Amy',
    //     'Statistics'
    //   ]


  

