function solve(arr) {
    let hasEqualSum = false;
 
    for (let i = 0; i < arr.length; i++) {
        let leftSum = 0;
        let rightSum = 0;
        for (let j = i-1; j >= 0; j--) {
         leftSum += arr[j];
        }
        for (let j = i + 1; j < arr.length; j++) {
            rightSum+=arr[j];
 
        }
        if (leftSum === rightSum){
            console.log(i);
            hasEqualSum = true;
        }
    }
if (!hasEqualSum){
        console.log('no');
}
}
solve([1, 2, 3, 3]);


solve([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])










