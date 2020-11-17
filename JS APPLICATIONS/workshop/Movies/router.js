const routes = {
    'home': 'home-template',
    'login': 'login-form-template',
    'register': 'register-form-template',
    
}

const router = (path) => {
    let app = document.getElementById('app')

    switch (path) {
        case 'logout':
            authServices.logout()
          return navigate('home')
            break;
        default:
            break;
    }

    let temp = Handlebars.compile(document.getElementById(routes[path]).innerHTML)

    let authData = authServices.getData();

    app.innerHTML = temp(authData)
}

