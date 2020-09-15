function solve(arr) {



    function isFull(matrix) {
        for (let line of matrix) {
            for (const item of line) {
                if (item == '') {
                    return false
                }
            }
        }
        return true
    }

    function makeMatrix(width, height) {
        let matrix = []
        for (let y = 0; y < height; y++) {
            let row = []
            for (let x = 0; x < width; x++) {
                row.push('')
            }
            matrix.push(row)
        }
        return matrix
    }
    let matrix = makeMatrix(width, height)
    matrix[y][x] = 1
    //y = 0
    //x = 0
    console.log(matrix)
    let rightIndexes = width - x //4
    let leftIndexes = width - rightIndexes//0
    let skyIndexes = y //0
    let groundIndexes = height - y
    let toIndex = Math.max(height, width)
    let num = 2

//!isFull(matrix)
    //while () {
        //Here you write how to surround the matrix!!


        for (let i = x; i < width - 1; i++) {
            matrix[y][i + 1] = num
            num++
        }


    //}
    console.log(matrix)


}
console.log(solve([4, 4, 1, 0]));
