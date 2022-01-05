function salary (input) {
    let tabs = +input.shift()

     let SaLarY = +input.shift()
    let salarNew = 0
     for (let websiteName = 1; websiteName <= tabs; websiteName++) {
         let  nameSite = input.shift()

         if (nameSite == "Facebook") {
             salarNew+= 150
         } 
          if (nameSite == "Instagram") {
            salarNew+= 100    
         } 
         
         if (nameSite == "Reddit") {
             salarNew+= 350
         }
         
     }

     if (SaLarY > salarNew) {
         console.log(SaLarY - salarNew) 

         } else {
             console.log(`You have lost your salary.`)
         
         }

     



}

salary([
'3',
'750',
'Facebook',
'Dev.bg',
'Instagram',
'Facebook',
'Reddit',
'Facebook',
'Facebook',

])