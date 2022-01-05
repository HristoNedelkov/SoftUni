function solve(arr, arr2) {
   let thirthArray = []

    for (let index = 0; index < arr.length; index++) {
        let element = arr[index];

        if (index % 2 == 0) {
            let par = +element + +arr2[index]
            thirthArray[index] = par

        } else {
              element = "" + element
            let resault = element + arr2[index]
            thirthArray[index] = resault


        }

        
    
    }   
           
        let resaultInTheEnd = ' '
        thirthArray.forEach(function(e, i, erread)  {
            
            if (i == thirthArray.length - 1) {
                resaultInTheEnd += `${e} `    
            } else {
                resaultInTheEnd += `${e} - `
                
            }
            
        });
    console.log(resaultInTheEnd);
            
}

solve (['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11'])