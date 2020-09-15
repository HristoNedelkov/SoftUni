function solve(numbers) {
    if (numbers == '') {
        return 'No'
    }
    numbers = numbers
        .split(' ')
        .map(Number)

    let ava = numbers.reduce((a,b)=> a+b) / numbers.length
    numbers
        .filter((el) => el > ava)
        .sort((a, b) => b - a)
        .filter((e,i) => i<5)


        return numbers == [] ?'No':numbers.join(' ')
}
console.log(solve('[ 60, 60, 51, 50, 50 ]'))