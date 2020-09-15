function solve(arr) {
    let items = arr.shift().split(', ')
    let el = arr.shift()
    while (el != 'Craft!') {
        el = el.split(' - ')
        let [command, item] = [...el]
        let commands = ['Collect', 'Drop', 'Combine Items', 'Renew']
        if (command == commands[0]) {
            items.includes(item) ? '' : items.push(item)
        } else if (command == commands[1]) {
            let i = items.indexOf(item)
            items.includes(item) ? items.splice(i, 1) : ''
        } else if (command == commands[2]) {
            let elem = item.split(':')
            let [old, newItem] = [...elem]
            let i = items.indexOf(old)
            items.includes(old) ? items.splice(i + 1, 0, newItem) : ''
        } else if (command == commands[3]) {
            let i = items.indexOf(item)
             
            let isE =items.includes(item) ?true:false
            if (isE) {
                items.splice(i,1)

                items.push(item)
            }
        }
        el = arr.shift()
    }
    console.log(items.join(", "))
}
console.log(solve([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ]
  ))