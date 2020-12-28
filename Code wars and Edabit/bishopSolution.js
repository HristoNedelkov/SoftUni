function bishop(start, end, n) {
    if (n == 0) return start == end
    let [s1, s2] = trans(start)
    console.log(`s1 => ${s1}`, `s2 => ${s2}`)
    let [e1, e2] = trans(end)
    console.log(`e1 => ${e1}`, `e2 => ${e2}`)
    let [x, y] = [Math.abs(s1 - e1), Math.abs(s2 - e2)]
    console.log(`x => ${x}`, `y => ${y}`)
    if (n == 1) return x == y
    return x % 2 == y % 2
}

function trans(coor) {
    return ['abcdefghijk'.indexOf(coor[0]), '12345678'.indexOf(coor[1])]
}

console.log(bishop('a1', 'b4', 2))