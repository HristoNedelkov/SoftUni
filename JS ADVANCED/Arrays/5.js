function solve(arr) {
    let crrNum;
    let res = []
    for (let i = 0; i <= arr.length - 1; i++) {
        let el = arr[i]
        if (i == 0) {
            crrNum = el
        }
        if (el >= crrNum) {
            res.push(el)
            crrNum = el
        }

    }

    return res.join('\n')
}
console.log(
    solve([1,
        3,
        8,
        4,
        10,
        12,
        3,
        2,
        24]
    )
);

