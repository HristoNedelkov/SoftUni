function converter (input){
    let value = Number(input.shift())
    let inMetric = input.shift()
    let outMetric = input.shift()
    
    if (inMetric == "mm"){

        value /= 1000 
    }

   
    if (inMetric == "cm"){

         value /= 100
    } 
    
    
    if (inMetric == "m"){

        value*=1
    }
   

    if(outMetric == "mm"){

 value *= 1000
    }

    if(outMetric == "cm"){

        value *= 100
    }

    if(outMetric == "m"){

        value *= 1
    }

               console.log(value.toFixed(3))

        }

