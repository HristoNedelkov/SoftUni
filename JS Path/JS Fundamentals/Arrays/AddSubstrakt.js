function solve(arr) {
    
    let sum = null
    arr.forEach(element => {
        sum += element
        
    });  
    let outPutArray = []
    sumNew = null
    arr.forEach((element, i,) => {
        if (element % 2 == 0) {
            sumNew += (element + i)
            outPutArray.push(arr[i] + i)
            
            
        } else {
            sumNew += (element - i)
            outPutArray.push(arr[i] - i)
        }
    });
    
    console.log(outPutArray)
    console.log(sum)
console.log(sumNew);


}


solve([5, 15, 23, 56, 35])