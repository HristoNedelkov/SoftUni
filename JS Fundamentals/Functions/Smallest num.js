function smallestNum (...input) {
let smallestNumber = Number.MAX_SAFE_INTEGER

for (let index = 0; index <= 3; index++) {
    let num = input.shift();
    if (num < smallestNumber) {
        smallestNumber = num
    }

}
console.log(smallestNumber);


}
smallestNum (2, 5, 1)