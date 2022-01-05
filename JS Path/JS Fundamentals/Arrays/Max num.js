function solve(arr) {
    let result = [] //[ 2, 3, 4 ]
    let maxNum = Number.MIN_SAFE_INTEGER    
    let resultInTheEnd = ''
   for (let index = arr.length + 1; index >= 0; index--) {
       const element = arr[index];
        if (element > maxNum) {
            maxNum = element
            result.push( element )
        } 
 
    }

    const reversed = result.reverse();
    result.forEach(function (el, index) {
        resultInTheEnd += el + " "
    })
    console.log(resultInTheEnd)
}

solve([1, 4, 3, 2])