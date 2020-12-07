const routes = {
    'home': 'home-template',
    'login': 'login-template',
    'register': 'register-template',
    'create-offer': 'create-offer-template',
    'details': 'details-template',
    'edit-offer': 'edit-offer-template',

}

const router = async (fullPath) => {
    let [path, id] = fullPath.split('/')
    
    let app = document.getElementById('app') //Here add the main
    let templateData = authServices.getData();

    switch (path) {     //Here are some functionality
        case 'home':
            let shoeData = await itemSurvices.getAll()
            .then(res => {
                if(Object.keys(res).length != 0) {   
                    templateData.shoes = res
               } 
            })  
            break;
        case 'logout':
            authServices.logout()
            postNotification(false,'You logged out of your account!')
            return navigate('home')
            break;
        case 'details':
            
            let shoeDetails = await itemSurvices.getOne(id)
            Object.assign(templateData, shoeDetails)
            break
        
        case 'edit': 

        console.log('OMG',id)

        break

        default:
            break;
    }

    let temp = Handlebars.compile(document.getElementById(routes[path]).innerHTML)
    app.innerHTML = temp(templateData)
}
