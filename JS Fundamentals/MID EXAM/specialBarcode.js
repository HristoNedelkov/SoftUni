function solve(arra) {
    let arr = arra.slice(1, arra.length)
    let newList = []
    for (const barcode of arr) {

        //        console.log(isValid1(barcode))
        console.log(isVALIDMain(barcode))
    }

    function isValid1(str) {
        let ISVALIDO = true
        let check = (a) => a == '#' || a == '@' ? '' : a
        ISVALIDO = str.split('').filter(check).join('').length >= 6

        return ISVALIDO
    }
    function isValid2(str) {
        let ISVALIDO = true

        str.split('')
        for (const char of str) {
            console.log(char);

        }
        return ISVALIDO
    }


    function isVALIDMain(str) {
        let res = true
        str.split()

        for (let i = 0; i < str.length; i++) {

            if (i == 0) {
                if (str[i] == '@') {
                    continue
                } else {
                    return false
                }
            }

            if (str[i] = '#') {


            } else {

            }

        }
        return res
    }
}
console.log(
    solve(
        [
            '6',
            '@@@@eM@###',
            '@#ValidIteM@#',
            '##InvaliDiteM##',
            '@InvalidIteM@',
            '@#Invalid_IteM@#',
            '@#ValiditeM@#'
        ]))