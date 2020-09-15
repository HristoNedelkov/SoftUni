function solve (arr) {
let table = [[false, false, false],
            [false, false, false],
            [false, false, false]];
            
            let player = 'X';
 
for (let line of arr) {
    let element = arr[i];
    let [x, currRow] = line.split(' ').map(Number);

     

    if (i % 2 == 0 || isXTurn == true) {
        let sym = 'X'
        if (table[x][y] !== false ) {
            console.log(`This place is already taken. Please choose another!`)
            
            isXTurn = true
            
            continue
        } else {
            isXTurn = false
            table[x][y] = sym
        }

    } else if (i % 2 == 1 || isOTurn == true) {
        let sym = 'O'
        
        if (table[x][y] !== false ) {
            console.log(`This place is already taken. Please choose another!`)
            isOTurn = true
            
            continue
        } else {
            isOTurn = false
            table[x][y] = sym
        }

    }

    for(let i = 0;i < table.length;i++) {
        var line = ''
        for (let index = 0; index < table[i].length; index++) {
            let element = table[i][index]
           
            line += element + " "

        }
        //console.log(line);
~
        if (line == "X X X" || line == "O O O ") {
           
            return `Winnnn!!!!`
        }

    }
}

let res = ''
for (const line of table) {
    res += line.join("\t")+"\n"
}
return res

}

console.log(
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
)