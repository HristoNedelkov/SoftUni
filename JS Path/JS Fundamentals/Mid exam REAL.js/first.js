function solve(numbers){
    let arr = numbers.split(' ').map(Number)
    let avar =  0
    for (const el of arr) {
        avar += el
    }
    avar /= arr.length
    
    let res = arr
        .filter((el) => el > avar)
        .sort((a,b) => b -a)
        .filter((el,i) => i < 5)
    return res == [] || arr.length == 1?'No':res.join(' ')
    }

