function solve(arr) {
return arr
    .splice(0, arr.length - 1)
    .join(arr.shift())
}

console.log(
    solve(
        ['How about no?', 
        'I',
        'will', 
        'not', 
        'do', 
        'it!', 
        '_']
        
    )
)