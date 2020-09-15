let arr = []
let string = 'String |is here'
for (let index = 10; index < 50; index++) {
    arr.push(index)

}
let res = []

for (const e of string) {
    if (e == '|') {
        break
    }
    res.push(e)
}
console.log(res);
console.log(arr);



