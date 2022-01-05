function solve(input) {
    let commands = {
        counter: 1,
        add: (arr,num) => [...arr,num],
        remove: (arr) => [...arr]
    }
    let result = input.reduce((acc, curr) => {
         acc = commands[curr](arr,counter)
         counter++
         return acc
    }, [])

}
console.log(
    solve(['add',
        'add',
        'add',
        'add']
    )
)