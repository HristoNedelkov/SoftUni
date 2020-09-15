function solve(arr, rotations) {
    
    
        for (let index = 1; index <= rotations; index++) {
        let elemento = arr.shift()
        arr.push(elemento)          
        }

        console.log(arr.join(' '));
}

solve ([51, 47, 32, 61, 21], 2)