function solve(arr) {
    let findRight = (_, index) => index % delemitur == 0
    let delemitur = arr.pop()

    return arr
        .filter(findRight)
        .join("\n")

}

console.log(
    solve(
        ['dsa',
            'asd',
            'test',
            'tset',
            '2']

    )
)