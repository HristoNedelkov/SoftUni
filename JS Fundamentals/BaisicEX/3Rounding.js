function solve(a,b) {
if (b > 15) {
    b = 15
}

return a.toFixed(b).parseFloat()
}
console.log(
    solve(3.1415926535897932384626433832795,2)
);
