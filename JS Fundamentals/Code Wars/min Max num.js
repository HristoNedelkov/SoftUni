function highAndLow(numbers) {
    let arr = numbers.split(' ').map(Number)
    console.log(arr);
    
    let maxNum = Number.MIN_SAFE_INTEGER 
    let minNum = Number.MAX_SAFE_INTEGER

    arr.forEach(function (element) {
        if (element >= maxNum) {
            maxNum = element
        }
        if (element < minNum) {
            minNum = element
        }
    });
    console.log(`${maxNum} ${minNum}`);
     



    }
highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6")
