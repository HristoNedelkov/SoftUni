function solve(arr) {
    let [a, b, c, allStudents] = [...arr].map(Number)
    let canHave = a + b + c
    let hour = 0
    let hadBreak = false
    while (allStudents > 0) {
        if (hour % 4 == 0) {
            hour++
            hadBreak = true
        } else {
            allStudents -= canHave
            hour++
        }
        
    }
    if (hadBreak) {
        console.log(`Time needed: ${hour - 1}h.`);

    } else {

        console.log(`Time needed: ${hour}h.`);
    }

}

console.log(solve(['5', '6', '4', '20']));
