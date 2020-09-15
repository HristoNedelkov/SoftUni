function solve(arr) {
    let array = arr.shift().split(' ')

    function swap(a, b) {
        let num = array[a]
        let numB = array[b]
        array[a] = numB
        array[b] = num
    }
    function multiply(a, b) {
        let res = array[a] * array[b]
        array[a] = res

    }
    function decrease(arr) {
        for (let i in array) {
            array[i] -= 1
        }
    }
    for (let line of arr) {
        line = line.split(' ')
        let [command, a, b] = [...line]
        Number(a)
        Number(b)
        if (command == 'swap') {
            swap(a, b)
        } else if (command == 'multiply') {
            multiply(a, b)

        } else if (command == 'decrease') {
            decrease(array)
        }
    }
    return array.join(', ')
}


console.log(solve([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
]));
