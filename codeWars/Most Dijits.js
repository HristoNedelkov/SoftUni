function findLongest(array){
    
    let answer =  array.reduce((result, current) => (String(result).length < String(current).length) ? current : result);
    



 console.log(answer);
 
}

findLongest([1, 10, 100])