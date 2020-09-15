function solve(theArr, toDO) {
   let elementsCount = toDO[0]
   let needTODEl = toDO[1]
   let searchedNum = toDO[2]
   let counter = 0
   let newArray = theArr.slice(0, elementsCount)
   newArray.splice(0, needTODEl)
   newArray.forEach(element => {
       if (element == searchedNum) {
        counter += 1
       }
   });
   console.log(`Number ${searchedNum} occurs ${counter} times.`);
   
}

solve([5, 2, 3, 4, 1, 6],
      [5, 2, 3]
    )