function solve() {
    let pad = document.getElementsByClassName('keys')[0]
    let out = document.getElementById('expressionOutput')
    let cleanBtn = document.getElementsByClassName('clear')[0]
    let operators = ['+','-','*','/']
    let operations = {
        '+': (a,b) => +a + +b,
        '-': (a,b) => +a - +b,
        '/': (a,b) => +a / +b,
        '*': (a,b) => +a * +b,
    }
    let result = document.querySelector("#resultOutput")
    cleanBtn.addEventListener('click',(e) => {
        out.innerHTML  = ''
        result.innerHTML = ''
    })
    pad.addEventListener('click', ({target: {value}}) => {
      if (!value) {
          return
      }

      if (value == '=') {
          let params = out.innerHTML.split(' ');
          if (params[2]) {


          result.innerHTML = operations[params[1]](params[0],params[2])
          }
          
          return
      }

      if (operators.includes(value)) {
          out.innerHTML += " " + value + " "
          return
      }

      out.innerHTML += value
    })
}