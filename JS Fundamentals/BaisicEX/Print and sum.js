function solve(a,b) {
let res = ''
let sum = 0
for (let i = a; i <= b; i++) {
    res += `${i} `
    sum += i
}

return `${res}
Sum: ${sum}`
}
console.log(
    solve(5, 65)
);
