a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

a1 = ["xyz", "live", "strong"]
function inArray(a1, a2) {
    let arr = []
    for (const el of a1) {
    if (a2.hasOwnProperty(el)) {
        arr.push(el)
    }
}
console.log(arr);
 
}
inArray()