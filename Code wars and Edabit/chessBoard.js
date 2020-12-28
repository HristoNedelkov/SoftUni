function bishop(start, end, n) {
    if (start == end) {
        return true
    }
    let horizontal = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    function show(arr) {
        let res = []
        arr.forEach(row => {
            res.push(row.join('  '))
        });
        return res.join('\n')
    }
    let chessBoard = [
        ['o', '*', 'o', '*', 'o', '*', 'o', '*'],
        ['*', 'o', '*', 'o', '*', 'o', '*', 'o'],
        ['o', '*', 'o', '*', 'o', '*', 'o', '*'],
        ['*', 'o', '*', 'o', '*', 'o', '*', 'o'],
        ['o', '*', 'o', '*', 'o', '*', 'o', '*'],
        ['*', 'o', '*', 'o', '*', 'o', '*', 'o'],
        ['o', '*', 'o', '*', 'o', '*', 'o', '*'],
        ['*', 'o', '*', 'o', '*', 'o', '*', 'o'],

    ]

    var [char, num] = [start[0], +start[1]]
    var [charE, numE] = [end[0], +end[1]]
    var startI = [Math.abs(num - 8), horizontal.indexOf(char)]
    var endI = [Math.abs(numE - 8), horizontal.indexOf(charE)]
    let startPoint = chessBoard[Math.abs(num - 8)][horizontal.indexOf(char)]
    let endPoint = chessBoard[Math.abs(numE - 8)][horizontal.indexOf(charE)]
    let startPointColor = startPoint == '*' ? 'black' : 'white'
    let endPointColor = endPoint == '*' ? 'black' : 'white'
    chessBoard[Math.abs(num - 8)][horizontal.indexOf(char)] = 'S'
    chessBoard[Math.abs(numE - 8)][horizontal.indexOf(charE)] = 'E'
    if (startPointColor != endPointColor) {
        return false
    }

   if(n > 1) {
       return true
   }
}
bishop('a1', 'b4', 2)