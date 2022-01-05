
function addEventListeners() {
    partialTemplate('header-template')
    partialTemplate('no-articles-template')
    partialTemplate('post-template')
    // partialTemplate('edit-template')
    // partialTemplate('home-logged-template')

    navigate('home')


}
function partialTemplate(id) {
    let cardTemp = Handlebars.compile(document.getElementById(id).innerHTML)
    Handlebars.registerPartial(id, cardTemp)
}
function navigateHandler(event) {
    //Navigate Handler --------
    event.preventDefault()
    let url = new URL(event.target.href)
    navigate(url.pathname.slice(1))
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

                navigate('home')

            } else {
                navigate('login')
            }
        })
}

function onRegSubmit(event) {
    event.preventDefault()
    let formData = new FormData(document.forms['register-form'])

    let email = formData.get('email')
    let password = formData.get('password')
    let repeatedPass = formData.get('rep-pass')

    let isValid = password === repeatedPass && email != '' ? true : false
    if (isValid) {
        authServices.register(email, password)
        .then(res => {

            navigate('home')
        })


    } else {
        navigate('register')
    }

}

function onAddSubmit(event) {
    event.preventDefault()
    let formData = new FormData(document.forms['create-form'])
    let title = formData.get('title')
    let category = formData.get('category')
    let content = formData.get('content')
    let owner = sessionStorage.getItem('auth')
    owner = JSON.parse(owner).email

    let isValid = title != '' && category != '' && content != ''

    if (isValid) {
        itemSurvices.add({ title, category, content,owner: owner })
            .then(res => {
                console.log(res)
                navigate('home')
            })
    } else {
        navigate('home')
        console.log('FIll all of the inputs')
    }



}


const navigate = (path) => {
    history.pushState({}, '', path)
    router(path)
}



function deleteOneFunc(e) {
    e.preventDefault()
    let id = window.location.href.split('/').pop()

    itemSurvices.deleteOne(id)
        .then(res => {
            console.log(res)
            navigate('home')
        })

        .catch(e => console.log(e))
}
function editOneFunc(e) {
    e.preventDefault()
    let id = window.location.href.split('/').pop()
    navigate('edit')

    document.getElementById('edit-btn').addEventListener('click', (e) => {
        e.preventDefault()
        let formData = new FormData(document.forms['edit-form'])
        let title = formData.get('title')
        let category = formData.get('category')
        let content = formData.get('content')

        let isValid = title != '' && category != '' && content != ''
        if (isValid) {
            itemSurvices.editOne(id, { title, category, content })
                .then(() => {
                    navigate('home')
                })
                .catch(e => {
                    console.log(`${e} ----> Sth went wroNG!`)
                })

        }
    })


}



addEventListeners()