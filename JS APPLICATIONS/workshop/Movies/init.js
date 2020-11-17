function addEventListeners() {
    let moviesTemp = Handlebars.compile(document.getElementById('movies-template').innerHTML)
    Handlebars.registerPartial('movies-template', moviesTemp)
    let navTemp = Handlebars.compile(document.getElementById('navigation-template').innerHTML)

    Handlebars.registerPartial('navigation-template', navTemp)
    navigate('home')

}
function navigateHandler(event) {
    //Navigate Handler --------
    event.preventDefault()

    if (!event.target.classList.contains('nav-link')) {
        return;
    }
    let url = new URL(event.target.href)
    navigate(url.pathname.slice(1))
    //That returns us only the patch word
}

function onLoginSubmit(event) {
    event.preventDefault()
    let formData = new FormData(document.forms['login-form'])

    let email = formData.get('email')
    let password = formData.get('password')

    authServices.login(email, password)
        .then(data => {
            let isReg = data.registered || false
            if (isReg) {
                let successBox = document.getElementsByClassName('notifications')[1]
                successBox.children[0].textContent = 'You are now LOGED IN :)'
                successBox.style.display = 'block'
                navigate('home')
                setTimeout(() => {
                    successBox.style.display = 'none'
                }, 2000)
            } else {
                navigate('login')
                let errorBox = document.getElementsByClassName('notifications')[0]
                errorBox.children[0].textContent = 'Wrong Password... TRY AGAIN :)'
                errorBox.style.display = 'block'
                setTimeout(() => {
                    errorBox.style.display = 'none'
                }, 4000)
            }
        })
}

function onRegSubmit(event) {
    event.preventDefault()
    let successBox = document.getElementsByClassName('notifications')[1]
    let errorBox = document.getElementsByClassName('notifications')[0]
    errorBox.children[0].textContent = 'Check if the pass are equal and if you include the email.. :D'
    let formData = new FormData(document.forms['register-form'])

    let email = formData.get('email')
    let password = formData.get('password')
    let repeatedPass = formData.get('repeatPassword')
    
    let isValid = password.length > 5 && password === repeatedPass && email!= ''? true:false
    if(isValid) {
        authServices.register(email,password)
        successBox.children[0].textContent = 'You are now registered. PLEASE LOG INTO YOUR ACCOUNT  :)'
        successBox.style.display = 'block'
        navigate('home')
        setTimeout(() => {
            successBox.style.display = 'none'
        }, 2000)

    } else {
        errorBox.style.display = 'block'
        setTimeout(() => {
            errorBox.style.display = 'none'
        }, 3500)
    }

}

const navigate = (path) => {
    //Here we change the address and shhow the html with  ROUTER()
    history.pushState({}, '', path)
    router(path)
}

addEventListeners()