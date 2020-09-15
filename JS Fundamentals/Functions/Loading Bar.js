function solve(n) {
    for (let i = n; i < 101; i += 10) {
        if (i == 100) {
            console.log(`100% Complete!
[%%%%%%%%%%]                 READY! :D`)
return
        } else {
            console.log(`${i}% [${'%'.repeat(i / 10)}${'.'.repeat((100 - i) / 10)}]
Still loading...`
            )
        }
        console.log(`|-------------------------------------Please wait!------------|`)
    }
}

console.log(
    solve(0)
)