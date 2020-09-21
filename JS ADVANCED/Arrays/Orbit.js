
function solve(w, h, x, y) {
    let matrix = [];
    for (let row = 1; row <= h; row += 1) {
        let arr = []
        for (let el = 1; el <= w; el++) {
            arr.push('*')
        }
        matrix.push(arr)
    }
    //The matrix READY!
    matrix[y][x] = 1
    for (let indexRow in matrix) {
        for (let i = 0; i <= w; i++) {
            let rowI = Math.abs(indexRow - y) + 1
            let columnI = Math.abs(i - x) + 1
            let numberToPut = Math.max(rowI, columnI)
            matrix[indexRow][i] = numberToPut            
        }
    }
     //matrix.map(el => console.log(el.join(" | ")))
     matrix.map(el => console.log(el.join(" ")))
    }
console.log(solve(12, 13, 6, 6));