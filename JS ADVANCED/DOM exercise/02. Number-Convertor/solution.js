function solve() {
    let list = document.querySelectorAll('#selectMenuTo')[0]
    let button = document.getElementsByTagName('button')[0]
    let input = document.querySelectorAll('#input')[0]

    list.innerHTML =
        `<option selected value=""></option>
<option value="hexadeicmal">Hexadeicmal</option>
<option value="binary">Binary</option>`
    button.addEventListener('click', (e) => {
        let res;
        if (list.value == 'binary') {
            res = (+(input.value)).toString(2)
        } else {
            res = (+(input.value)).toString(16).toUpperCase()
        }
        document.getElementById('result').value = res
    })

    
}