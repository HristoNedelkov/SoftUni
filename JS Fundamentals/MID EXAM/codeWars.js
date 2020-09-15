function solve() {
    let numbers = [13, 23, 1, 3, 5, 6, 3]
    let strings = ['asf', 'asf', 'asfs', 'adgs', 'iccsa']
    let slaganeNaCherti = (el, i) => {
        for (const char of el) {
            
            
        }
    }
    Array.prototype.square = function () { return this.map(function (n) { return n * n; }); }

    Array.prototype.icko = function () { return this.map((el) => el + 2) }
    Array.prototype.icakiss = function () { return this.map(slaganeNaCherti) }



    return `${strings.icakiss()}

A towa e istinskiq array:  ${strings}`

}
console.log(solve())