function solve(arr) {
    let table = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];
    let player = 'X';
 
    for (let line of arr) {
        [currRow, currCol] = line.split(' ').map(Number);
 
        if (table[currRow][currCol] !== false) {
            console.log('This place is already taken. Please choose another!');
            continue;
        }
 
        table[currRow][currCol] = player;
 
        //check horizontal and vertical
        for (let i = 0; i < 3; i++) {
            if (
                table[i][0] === player &&
                table[i][1] === player &&
                table[i][2] === player
            ) {
                console.log(`Player ${player} wins!`);
                printMatrix();
                return;
            } else if (
                table[0][i] === player &&
                table[1][i] === player &&
                table[2][i] === player
            ) {
                console.log(`Player ${player} wins!`);
                printMatrix();
                return;
            }
        }
 
        //check left to right
        if (
            table[0][0] === player &&
            table[1][1] === player &&
            table[2][2] === player
        ) {
            console.log(`Player ${player} wins!`);
            printMatrix();
            return;
        }
 
        //check right to left
        else if (
            table[0][2] === player &&
            table[1][1] === player &&
            table[2][0] === player
        ) {
            console.log(`Player ${player} wins!`);
            printMatrix();
            return;
        }
 
        let theresFalse = false;
 
        for (let row = 0; row < table.length; row++) {
            if (table[row].includes(false)) {
                theresFalse = true;
            }
        }
 
        if (!theresFalse) {
            console.log('The game ended! Nobody wins :(');
            printMatrix();
            return;
        }
 
        player = player === 'X' ? 'O' : 'X';
    }
 
    function printMatrix() {
        for (let row = 0; row < table.length; row++) {
            console.log(table[row].join('\t'));
        }
    }
}
solve(
    ["0 0",
    "0 0",
    "1 1",
    "0 1",
    "1 2",
    "0 2",
    "2 2",
    "1 2",
    "2 2",
    "2 1"]
)