function solve(arr) {
  
    let uniqeElements =[]



    for (let element of arr) {
        
        if (!uniqeElements.includes(element)) {
            uniqeElements.push(element)
        }
    }

    console.log(uniqeElements.join(' '));

}

solve([7, 8, 9, 7, 2, 3,  5, 5, 4, 1, 2])