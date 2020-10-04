function create(words) {
   let content = document.querySelector('#content')

   words.forEach(word => {
      let div = document.createElement('div')
      let p = document.createElement('p')
      p.textContent = word
      p.style.display = 'none'
      div.appendChild(p)
      content.appendChild(div)
      div.addEventListener('click',() => {
         p.style.display = 'block'
      })

   });

}