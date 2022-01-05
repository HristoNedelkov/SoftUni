function solve(a1,b2) {
    function gcd (a, b) {
        if (b === 0) return a;
        return gcd(b, a % b);
    };

    return gcd(a1,b2)
}
console.log(solve(12,123))