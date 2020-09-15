function repeatStr(n, s) {
    let result = ''
    for (let i = 1; i <= n; i++) {
        result += s
    }
    console.log(result);

}
repeatStr(3, "*")
