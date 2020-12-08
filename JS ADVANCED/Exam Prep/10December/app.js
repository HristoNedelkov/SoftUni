function solution() {
    const createElements = (...types) => types.map((type) => document.createElement(type));
    let inp = document.querySelector('input')
    let cards = document.getElementsByClassName('card')
    let list = cards[1].querySelector('ul')
    let sent = cards[2].querySelector('ul')
    let disc = cards[3].querySelector('ul')
    let arr = []
    document.querySelector('button').addEventListener('click',(e)=> {
        e.preventDefault()
        
        let els = createElements('li','button','button')
        els[0].textContent = inp.value;
        els.forEach(e=> e.className = 'gift')
        
        els[1].id = 'sendButton';
        els[1].textContent = 'Send';
        els[2].id = 'discardButton'
        els[2].textContent ='Discard';
        
        els[1].addEventListener('click',sendHandler)
        els[2].addEventListener('click',discardHandler)

        els[0].appendChild(els[1])
        els[0].appendChild(els[2])

        arr.push(els[0])
        arr.sort((a,b)=> (a.textContent).localeCompare(b.textContent))
        arr.forEach(el=> list.appendChild(el))
       // list.appendChild(els[0])

        
        inp.value = ''


    })

    function sendHandler (e) {
        let el = e.target.parentNode
        arr = arr.filter(e=> e!=el)
        console.log(arr)
        el.removeChild(el.lastChild)
        el.removeChild(el.lastChild)
        sent.appendChild(el)
    }
    function discardHandler (e) {
        let el = e.target.parentNode
        arr = arr.filter(e=> e!=el)
        console.log(arr)
        el.removeChild(el.lastChild)
        el.removeChild(el.lastChild)
                
        disc.appendChild(el)
    }

}