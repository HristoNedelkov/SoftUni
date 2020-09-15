function solve(input) {
    let cards = input.shift();
    let deck = cards.split(":");
    let command = input.shift();
    let myDeck = [];
 
    while (command !== 'Ready') {
 
        if (command.includes('Add')) {
            let arrCommand = command.split(" ");
            let CardNameNew = arrCommand[1];
 
            if (deck.includes(CardNameNew)) {
 
                myDeck.push(CardNameNew);
 
            } else {
                console.log('Card not found.');
            }
 
            command = input.shift();
 
        } else if (command.includes('Insert')) {
 
            let arrCommand = command.split(" ");
            let CardNameNew = arrCommand[1];
            let CardIndex = +arrCommand[2];
 
            if (deck.includes(CardNameNew) && CardIndex >= 0 && CardIndex < myDeck.length) {
 
                myDeck.splice(CardIndex, 0, CardNameNew)
 
            } else {
                console.log('Error!');
            }
 
            command = input.shift();
 
        } else if (command.includes('Remove')) {
            let cardName = command.split(" ")[1];
 
            if (myDeck.includes(cardName)) {
 
                const isVal = (element) => element === cardName;
                let i = myDeck.findIndex(isVal);
 
                myDeck.splice(i, 1);
 
            } else {
                console.log('Card not found.');
            }
 
            command = input.shift();
        } else if (command.includes('Swap')) {
 
            let arrCommand = command.split(" ");
            let CardName1 = arrCommand[1];
            let CardName2 = arrCommand[2];
 
            const isCardName1 = (element) => element === CardName1;
            const isCardName2 = (element) => element === CardName2;
            let indexCardName1 = myDeck.findIndex(isCardName1);
            let indexCardName2 = myDeck.findIndex(isCardName2);
 
 
            myDeck.splice(indexCardName1, 1, CardName2);
            myDeck.splice(indexCardName2, 1, CardName1);
            command = input.shift();
 
        } else if (command.includes('Shuffle')) {
 
            myDeck = myDeck.reverse();
            command = input.shift();
 
        }
 
    }
 
    console.log(myDeck.join(' '));
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
