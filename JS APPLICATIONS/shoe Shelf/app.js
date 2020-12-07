
function addEventListeners() {
    partialTemplate('shoe-card-template')
    partialTemplate('navigation-template')
    partialTemplate('about-us-template')
    partialTemplate('shoes-store-template')
    //  partialTemplate('edit-offer-template')
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

                navigate('home')
                postNotification(true, 'You are now LOGED IN :)')

            } else {
                navigate('login')
                postNotification(false, 'Wrong password or email addres, please TRY again!!! :D')
            }
        })
}

function onRegSubmit(event) {
    event.preventDefault()
    let formData = new FormData(document.forms['registration-form'])

    let email = formData.get('email')
    let password = formData.get('password')
    let repeatedPass = formData.get('rePassword')

    let isValid = password.length > 5 && password === repeatedPass && email != '' ? true : false
    if (isValid) {
        authServices.register(email, password)
        postNotification(true, 'You are now registered. PLEASE LOG INTO YOUR ACCOUNT  :)')
    } else {
        postNotification(false, 'Check if the pass are equal and if you include the email.. :D')
    }

}

function onAddShoeSubmit(event) {
    event.preventDefault()
    let formData = new FormData(document.forms['add-shoe-form'])
    let name = formData.get('name')
    let description = formData.get('description')
    let imageUrl = formData.get('imageUrl')
    let brand = formData.get('brand')
    let price = `$${formData.get('price')}`

    let isValid = name != '' && description != '' && imageUrl != '' && brand != '' && price != '' ? true : false

    if (isValid) {
        shoesSurvices.add({ name, description, imageUrl, brand, price,likes: 0 })
            .then(res => {
                navigate('home')
                postNotification(true, 'Added new shoe to the store successfully :)')
            })
    } else {
        navigate('create-offer')
        console.log('FIll all of the inputs')
        postNotification(false, 'Fill all fields,PLEASE :D')
    }



}


const navigate = (path) => {
    //Here we change the address and shhow the html with  ROUTER()
    history.pushState({}, '', path)
    router(path)
}

function postNotification(type, text) {
    if (type) {
        let notificationBox = document.getElementsByClassName('notifications')[1]
        notificationBox.children[0].textContent = text
        notificationBox.style.display = 'block'
        setTimeout(() => {
            notificationBox.style.display = 'none'
        }, 4000)
    } else {
        let notificationBox = document.getElementsByClassName('notifications')[0]
        notificationBox.children[0].textContent = text
        notificationBox.style.display = 'block'
        setTimeout(() => {
            notificationBox.style.display = 'none'
        }, 4000)
    }
}

function deleteOneFunc(e) {
    e.preventDefault()
        let id = window.location.href.split('/').pop()

    shoesSurvices.deleteOne(id)
        .then(res => console.log(res))
        .then(data => navigate('home'))
        .catch(e => console.log(e))
}
function editOne(e) {
    e.preventDefault()
    let id = window.location.href.split('/').pop()
    navigate('edit-offer')
    
    document.getElementById('edit-btn').addEventListener('click', (e) => {
        e.preventDefault()
        let formData = new FormData(document.forms['edit-form'])
        let name = formData.get('name')
        let description = formData.get('description')
        let imageUrl = formData.get('imageUrl')
        let brand = formData.get('brand')
        let price = formData.get('price')
        let elements = {
            name,
            description,
            imageUrl,
            brand,
            "price": `$${price}`
        }
        shoesSurvices.editOne(id, elements)
            .then(res => {
                postNotification(true,`Everething is ${res.statusText}`)
            }).then(() => {
                navigate('home')
            })
            .catch(e => {
                console.log(`${e} ----> GRESHKAAAAAAAAAA`)
            })
    })


}



addEventListeners()