function solve(arr) {
    let target = arr.shift().split(' ');
    let comnd = ['Shoot', 'Add', 'Strike']
    let line = arr.shift()
    while (line != 'End') {
        let a = line.split(' ')[0]
        let i = +line.split(' ')[1]
        let p = +line.split(' ')[2]

        if (a == comnd[0]) {
            if (target[i] != undefined) {
                target[i] -= p
            }
            if (target[i] <= 0) {
                target.splice(i, 1);
            }
        } else if (a == comnd[1]) {
            if (target[i] != undefined) {
                target.splice(i, 0, p)
            } else {
                console.log("Invalid placement!");
            }

        } else if (a == comnd[2]) {
            let range = 2*p + 1
            if (target[i - p] != undefined  && target[i + p] != undefined) {
                
                target.splice(i - p, range)
            } else {
                console.log("Strike missed!" );
                
            }
        }

        line = arr.shift()
    }
   return target.join('|') ;

}
console.log(
    solve([
        '47 55 85 78 99 20',
        'Shoot 1 55',
        'Shoot 8 15',
        'Strike 2 3',
        'Add 0 22',
        'Add 2 40',
        'Add 2 50',
        'End'
      ]
      )
)