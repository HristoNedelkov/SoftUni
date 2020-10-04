function solve() {
   let p1Cards = document.getElementById('player1Div')
   let p2Cards = document.getElementById('player2Div')
   let cards = document.getElementsByClassName('cards')[0]
   let divVS = document.getElementById('result')
   let spans = [...divVS.children]

   // spans[0].textContent = ''
   // spans[2].textContent = ''

   cards.addEventListener('click', (e) => {
      let num = +(e.target.name)
      let parent = e.target.parentElement

      if (parent == p1Cards) {
         var cardUp = e.target
         spans[0].textContent = num
         e.target.src = 'images/whiteCard.jpg'
      } else if (parent == p2Cards) {
         let cardDown = e.target
         spans[2].textContent = num
         e.target.src = 'images/whiteCard.jpg'
         
         let greenCard = +(spans[0].textContent) >= +(spans[2].textContent)? spans[0].textContent : spans[2].textContent  
         console.log(greenCard)
         let card = p2Cards.querySelector(`img[name=$${greenCard}]`)
         // redCard.style.border = "2px solid red"
         card.style.border = "2px solid green"
      }
      

   });
  



}