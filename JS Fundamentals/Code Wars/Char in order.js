var uniqueInOrder = function (iterable) {
    let res = []
    for (const char of iterable) {
        if (res[res.length - 1] !== char) {
            res.push(char)
        }
    }
    return res

}