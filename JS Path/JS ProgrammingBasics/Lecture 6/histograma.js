function histo (input) {
let n = +input.shift()

let p1 = 0;

let p2 = 0; 
let p3 = 0;
let p4 = 0
let p5 = 0

 



  for(let start = 1; start <= n; start++) {
   let number = +input.shift()

    if (number < 200) {
      p1++
      
    } else if (number >= 200 && number <= 399 ) {
      p2++
     

    } else if (number >= 300 && number <= 599) {
        p3++
        
      } else if (number >= 600 && number <= 799) {
          p4++
          
        }else {
          p5++
        
        }
        
  
      }

      proP1 = ((p1 / n) * 100).toFixed(2)
      proP2 = ((p2 / n) * 100).toFixed(2)
      proP3 = ((p3 / n) * 100).toFixed(2)
      proP4 = ((p4 / n) * 100).toFixed(2)
      proP5 = ((p5 / n) * 100).toFixed(2)

        
      console.log(`${proP1}%`)
      console.log(`${proP2}%`)
      console.log(`${proP3}%`)
      console.log(`${proP4}%`)
      console.log(`${proP5}%`)




}
histo ([
 '9 ', 
'367',
'99',
'200',
'799',
'999',
'333',
'555',
'111',
  '9'
])