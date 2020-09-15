function solve(arr) {
 let rotations = +arr.pop()% arr.length

     for (let i = 1; i <= rotations; i++) {
let el = arr.pop()         
arr.unshift(el)
     }

    return arr.join(' ')
}

console.log(
    solve(['Banana',
        'Orange',
        'Coconut',
        'Apple',
        '15']
    )
);
