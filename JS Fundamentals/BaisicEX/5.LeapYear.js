function solve(num) {
if (num % 400 == 0) {
    return 'yes'
}else if (num % 4 == 0 && num % 100 != 0) {
    return 'yes'
} else {
    return 'no'
}
}
console.log(solve(1984))