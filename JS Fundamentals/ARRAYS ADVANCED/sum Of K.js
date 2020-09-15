function solve(n, k) {
    const arr = [1]

    for (let index = 1; index < n; index++) {
        let target = index - k
        let sum = 0
        
        for (let j = index - 1; j > target; j--) {
            if (j < 0) {
                break
            }
            sum += arr[j]

        }
        arr.push(sum)
    }
    console.log(arr.join(' '))
}
solve (60, 3)