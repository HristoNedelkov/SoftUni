function equalNeighbors(inputData) {
    let count = 0;

    for (let i = 0; i < inputData.length; i++) {
       
        for (let j = 0; j < inputData[i].length; j++) {
            
            if (i < inputData.length - 1 && inputData[i][j] === inputData[i + 1][j]) {
                count++;
            }
           
            if (inputData[i][j] === inputData[i][j + 1]) {
                count++;
            }
        }
    }

    return count;
}



equalNeighbors([
    ['test', 'yes', 'yo', 'ho'],
    ['test', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']
])