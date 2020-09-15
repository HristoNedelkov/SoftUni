function solve(arr) {
    function swap(arr, from, to) {
        arr.splice(from, 1, arr.splice(to, 1, arr[from])[0]);
      }
    let myDeck = []
    let deck = arr.shift().split(':');

    //    console.log(`${deck.join(' | ')}`)
    let cmd = ['Add', 'Insert', 'Remove', 'Swap', 'Shuffle']
    let line = arr.shift().split(' ')

    while (line != 'Ready') {
        let index;
        let cardNameTwo;

        let curCommand = line[0]
        let cardName = line[1]
         

        if (curCommand == cmd[0]) {
            if (deck.includes(cardName)) {
                myDeck.push(cardName)
            } else {
                console.log("Card not found.");

            }
         }else if (curCommand == 'Insert') {
            index = line[2]
            if (deck.includes(cardName) && index >= 0 && index < myDeck.length) {
                
                myDeck.splice(index, 0,cardName)
            } else {
                console.log('Error!')
            }
        } else if (curCommand =='Remove') {
            if (myDeck.includes(cardName)) {
 
                const isVal = (element) => element === cardName;
                let i = myDeck.findIndex(isVal);
 
                myDeck.splice(i, 1);
 
            } else {
                console.log('Card not found.');
            }
        }
         else if (curCommand == cmd[3]) {
            cardNameTwo = line[2]
            let card1 = myDeck.indexOf(cardName)
            let card2 = myDeck.indexOf(cardNameTwo)
            swap(myDeck, card1, card2)
         }else if (curCommand == cmd[4]) {
            myDeck = myDeck.reverse()
        }


         line = arr.shift().split(' ')
     }
    console.log(myDeck.join(' '))

}

console.log(
    solve([
        'Innervate:Moonfire:Pounce:Claw:Wrath:Bite',
        'Add Moonfire',
        'Add Pounce',
        'Add Bite',
        'Add Wrath',
        'Insert Claw 0',
        'Swap Claw Moonfire',
        'Remove Bite',
        'Shuffle deck',
        'Ready'
    ])
);
