function solve(arr) {
    let M = +arr.shift()
    let N = +arr.shift()
    let S = +arr.shift()

    let res = []

    for (let i = M; i <= N; i++) {
        if (i % 2 == 0 && i % 3 == 0) {
            
            res.unshift(i)
        } 

    }
let result = ''
    for (const num of res) {
        if (num == S) {
            break
        } else {
            result += `${num} `
        }
    }
console.log(result)
}

solve(['1', '30', '15'])