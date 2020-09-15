function solve(arr,sum) {
    let res = []
    for (let num of arr) {
        for (let i = 0; i < arr.length; i++) {
            let number = arr[i] 
            if (i == arr.indexOf(num)) {

            } else {
            if (number + num == sum) {
                if (!res.includes(`${num} ${number}`) && !res.includes(`${number} ${num}`) ) {

                    res.push(`${num} ${number}`)    
                }
            }
        }
        }
    }
    return res.join('\n')
}
console.log(solve([1, 7, 6, 2, 19, 23], 8))