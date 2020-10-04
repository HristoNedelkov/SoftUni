function solve() {
   let btn = document.querySelector('#searchBtn')
   let input = document.getElementById('searchField')
   let names = document.getElementsByTagName('tr')
   names = [...names]
   btn.addEventListener('click', (e) => {
      let inputText = input.value
      let regPat = new RegExp(`${inputText}`)
      names.map(el => el.classList.remove('select'))
      for (let i in names) {
         if (i >= 2) {
            for (let el = 0; el <= 2; el++) {
               let field = names[i].children[el].textContent
               if (field.match(regPat)) {

                  names[i].classList = 'select'
                  input.value = ''

               }
            }
         }
      }
   })

}