function toggle() {
    let p = document.getElementById('extra')
    let btn = document.querySelector('.button')
    
        if (btn.textContent == 'More') {
            btn.textContent = 'Less'
            p.style.display  = 'block'

        } else if (btn.textContent == 'Less') {
            btn.textContent = 'More'
            p.style.display = 'none'

        }
  
   
}
