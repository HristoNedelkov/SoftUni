function solve() {
    let lines = document.getElementsByTagName('li')
    let input = document.getElementsByTagName('input')[0]
    let btn = document.getElementsByTagName('button')[0]
    let giveIndex = (char) => { return char.toUpperCase().charCodeAt(0) - 65 }
    
    btn.addEventListener('click', (e) => {
        let line = lines[giveIndex(input.value[0])]
        if (line.innerHTML != '') {
            line.innerHTML += ", " + input.value
        } else {
            line.innerHTML = input.value
        }
        input.value  = ''
    })



}