function solve() {
  
   let costEl = document.querySelector('div.courseFoot > p')
   let toAdd = document.querySelector('div#myCourses > div.courseBody > ul')

   document.querySelector('button').addEventListener('click', (e) => {
      let costs = {
         'JS Fundamentals': 170,
         'JS Advanced': 180,
         'JS Applications': 190,
         'JS Web': 490,
      }
      e.preventDefault()
      // .checked 
      let selected = document.getElementsByTagName('li')
      selected = Array.from(selected)
      selected = selected.filter(el => el.querySelector('input').checked)

      let where = document.getElementById('educationForm')
      let isOnline = where.querySelector('input').checked
      let courses = Array.from(selected).map(el => el.querySelector('label').textContent.split(' - ')[0])

      
      let haveBonus = undefined;
      
      if (courses.includes('JS Fundamentals') && courses.includes('JS Advanced')) {
         costs["JS Advanced"] -= costs["JS Advanced"]* 0.10
      }
      if (courses.includes('JS Web') && courses.includes('JS Applications') && courses.includes('JS Advanced') && courses.includes('JS Fundamentals')) {
         haveBonus = 'HTML and CSS'
      }
     
      
      let finalPrice = 0
      courses.forEach(row => {

         let li = document.createElement('li')
         let name = row

         let price = costs[name]
         li.textContent = name.replace(/\s/,'-')
         toAdd.appendChild(li)
         finalPrice += +price
      })

      if (haveBonus) {
         let li = document.createElement('li')
         li.textContent = 'HTML and CSS'
         toAdd.appendChild(li)
      }
      if (courses.includes('JS Applications') && courses.includes('JS Advanced') && courses.includes('JS Fundamentals')) {
        
         finalPrice -= (costs["JS Applications"] + costs["JS Advanced"] + costs["JS Fundamentals"]) * 0.06
      }
      
      if (!isOnline) {
         // costs["JS Advanced"] -= costs["JS Advanced"] * 6/100
         // costs["JS Applications"] -= costs["JS Applications"] * 0.06
         // costs["JS Fundamentals"] -= costs["JS Fundamentals"] * 0.06
         // costs["JS Web"] -= costs["JS Web"] * 6/100
          finalPrice -= finalPrice * 0.06
      }
      costEl.textContent = `Cost: ${(Math.floor(finalPrice)).toFixed(2)} BGN`




   })
}


solve();