function subtract() {
const $firstInput = document.querySelector('#firstNumber')
const $secondInput = document.querySelector('#secondNumber')
const $divElement = document.getElementById('result')
const result = +$firstInput.value - +$secondInput.value 

$divElement.textContent = result

}