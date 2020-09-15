function addItem() {
let $select = document.getElementById('menu');
let inputs = document.getElementsByTagName('input')
let text = inputs[0]
let value = inputs[1]
let newEl = document.createElement('option')
newEl.textContent = text.value
newEl.value = value.value

$select.appendChild(newEl)
text.value = ''
value.value = ''

}