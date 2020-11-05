function attachEvents() {
    let load = document.querySelector('#btnLoad')
    let ul = document.querySelector('#phonebook')
    let inputs = document.querySelectorAll('input')
    let name = inputs[0]
    let phone = inputs[1]
    load.addEventListener('click', () => {
        fetch('https://phonebook-nakov.firebaseio.com/phonebook.json')
            .then(res => res.json())
            .then(res => {
                let arr = Object.entries(res).map(el => el[1])
                console.log(arr)
            })

    })

    function rm (key) {
        fetch(`https://phonebook-nakov.firebaseio.com/phonebook/${key}.json `)
    }

}

attachEvents();