function solve(arr) {
    let regPt = /\W/
    let sortedArr = arr.sort((a, b) => a[0].localeCompare(b[0]))
    let firstChar = sortedArr[0][0]
    let obj = {}
    for (let line of sortedArr) {
        if (line[0] != firstChar) {
            firstChar = line[0]
        }
        if (obj.hasOwnProperty(firstChar)) {

            obj[firstChar].push(line)
        } else {
            
            obj[firstChar] = [line]
        }
    }
    obj = Object.entries(obj);
    
    for (let line of obj) {
        let char = line.shift()
        
       console.log(char) 
        
        line.map(el => console.log("  " + el.sort((a, b) => a.localeCompare(b)).join("\n" + "  ")))
    }

   
}
solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10',]
)