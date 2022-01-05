function solve(arr) {

    let ascending = arr.slice().sort(sortFun)
    let descending = arr.slice().sort(sortFunc)

    let output = []

    for (let index = 0; index < arr.length; index++) {
        let element = arr[index];
        if (index % 2 == 0) {
            output.push(descending.shift())
        } else {
            output.push(ascending.shift())
        }
    }


    function sortFunc(a, b) {
        return b - a
    }
    function sortFun(a, b) {
        return a - b
    }

    console.log(output.join(' '));
    
}
solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])