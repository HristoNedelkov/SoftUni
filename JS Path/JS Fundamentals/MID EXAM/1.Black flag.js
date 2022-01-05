function solve(arr) {
    let days = +arr[0]
    let dailyPlunder = +arr[1]
    let expectedPlunder = +arr[2]
    let collectedPlunder = 0;

    for (let i = 1; i <= days; i++) {
        collectedPlunder = collectedPlunder + dailyPlunder;
        if (i % 3 === 0) {
            collectedPlunder = collectedPlunder + 0.5 * dailyPlunder;
        }
        if (i % 5 === 0) {
            collectedPlunder = collectedPlunder * 0.7;
        }

    }

    if (collectedPlunder >= expectedPlunder) {
        console.log(`Ahoy! ${collectedPlunder.toFixed(2)} plunder gained.`)
    } else {
        let needed = (collectedPlunder / expectedPlunder * 100);

        console.log(`Collected only ${needed.toFixed(2)}% of the plunder.`)

    }

}
solve(['5', '40', '100'])