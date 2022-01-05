function solution() {
    let str = ''
    return {
        append: (s) => str += s,
        cut: (n) => str[n] = ''
    }

}
