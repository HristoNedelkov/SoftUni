
function errorMes() {
    let er = document.querySelector('#error')
    er.style.display = 'block'

    setTimeout(() => {
        er.style.display = 'none'
    }, 5000)

}

function successMes(name) {
    let er = document.querySelector('#success')
    let p = document.querySelector('body>div#success>p')
    p.textContent = 'You send { ' + name + ' } to the DB!'
    er.style.display = 'block'

    setTimeout(() => {
        er.style.display = 'none'
    }, 4000)
}
function run() {
    function handlerBtn(e) {
        let input = document.querySelector('input');
        if (pat.test(input.value)) {
            let arr = input.value.split(' ')
            successMes(arr[0])
            setTimeout(() => {
                sendText(arr)
            }, 4000)
        } else {
            errorMes()
        }

        input.value = ''
    }

    const pat = /^[A-z]+\s(\d){1,3}$/
    let btn = document.querySelector('button')
    btn.addEventListener('click', handlerBtn)

    let textarea = document.querySelector('input');
textarea.addEventListener('keyup', (e) => {
    if(e.key == 'Enter') {
        handlerBtn(e)
    }
  });


    function sendText(text, n) {
        let obj = {
            name: text[0],
            age: text[1]
        }

        const res = JSON.stringify(obj)
        window.location.pathname = `/api/${obj.name}/${obj.age}`
        //${obj.name}/${obj.age}
    }

}
export default run