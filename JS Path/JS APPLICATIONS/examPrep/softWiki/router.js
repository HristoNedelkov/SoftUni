const routes = {
    'home': 'home-template',
    'login': 'login-template',
    'register': 'register-template',
    'details': 'details-template',
    'edit': 'edit-template',
    'create': 'create-template',

}

const router = async (fullPath) => {
    let [path, id] = fullPath.split('/')

    let app = document.getElementById('root')
    let templateData = authServices.getData();

    switch (path) {     //
        case 'home':
            let postsData = await itemSurvices.getAll()
                .then(res => {
                    if (Object.keys(res).length != 0) {
                        templateData.posts = res
                    }
                })
            break;
        case 'logout':
            authServices.logout()
            return navigate('login')

        case 'details':
            let postDetails = await itemSurvices.getOne(id)
            let currOwner = JSON.parse(sessionStorage.getItem('auth')).email
            let owner = postDetails.owner;

            Object.assign(templateData, postDetails)
            Object.assign(templateData, { isChanged: currOwner == owner })
            break;
        case 'delete':
            await itemSurvices.deleteOne(id)

            navigate('home')
            return

        default:
            break;
    }

    let temp = Handlebars.compile(document.getElementById(routes[path]).innerHTML)
    app.innerHTML = temp(templateData)
}
