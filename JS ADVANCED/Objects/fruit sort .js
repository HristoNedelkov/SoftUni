function oranges(arr){
let obj = {}
let finalObj = {}

for(line of arr) {
let lineArr = line.split(' => ')

let fruit = lineArr[0]
let quantity = +lineArr[1]

if (obj.hasOwnProperty(fruit)) {
  obj[fruit] += quantity
} else {
  obj[fruit] = quantity
}

}
//
for(let item in obj) {
  let count = +obj[item]

  if (count > 1000) {
    while(count >= 1000) {
      obj[item] -= 1000
      count -= 1000
      if (finalObj.hasOwnProperty(item)) {
        
      finalObj[item] += 1

      } else {
      finalObj[item] = 1

      }
    }
  }
}
Object.keys(finalObj).reverse()
for(let key in finalObj) {
  console.log(`${key} => ${finalObj[key]}`)
}
};
oranges(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']
)
