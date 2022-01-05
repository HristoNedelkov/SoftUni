function charactersInRange (startSym, endSym) {

    let startAcsciiValue = startSym.charCodeAt(startSym)
    let endAsciiValue = endSym.charCodeAt(endSym)

    let startPoint = Math.min(startAcsciiValue, endAsciiValue)
    let endPoint = Math.max(startAcsciiValue, endAsciiValue)
  
    printAsciiSymbols (startPoint, endPoint )

        function getAcsciiValue (char) {
            return char.charCodeAt()
        }

        function printAsciiSymbols (after, before) {
            
             after++
             before--
            
            let symbols =[]

            for (let i = after; i <= before; i++) {
               symbols.push(String.fromCharCode(i))
            }

            console.log(symbols.join(" "));
            
        }

}
charactersInRange('0','Z')