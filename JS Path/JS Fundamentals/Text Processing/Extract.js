function solve(str) {
    let res = str.split('').reverse().join('').match(/[A-z]+\.[A-z]+[\\]+/)[0]
 res = res.split('').reverse().slice(1,res.length).join('').split('.')
return `File name: ${res[0]}
File extension: ${res[1]}`
}
console.log(solve('C:\\Internal\\training-internal\\Template.pptx'))