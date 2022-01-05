const apiKey = 'AIzaSyA_d_RxJw-lDYbL8L7KE-EAUlLW370OIs8'
const dataBaseUrl = 'https://softwiki-a444e-default-rtdb.firebaseio.com'

const authServices = {
    async login(email, password) {
        let res = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password,
            })
        })
        let data = await res.json()

        sessionStorage.setItem('auth', JSON.stringify(data))
        return data
    },
    async register(email, password) {
        let res = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password,

            })
        })

        let data = await res.json()
        await authServices.login(email,password)
        return data

    },
    getData() {
        try {
            let data = JSON.parse(sessionStorage.getItem('auth')) || false
            return {
                isAuth: data.idToken ? true : false,
                email: data.email ? data.email.split('@')[0] : '',
                owner: data.owner
            }
        } catch (e) {
            return {
                isAuth: false,
                email: ''
            }
        }

    },
    logout() {
        sessionStorage.setItem('auth', '')

    }
}

const itemSurvices = {
    async add(postData) {

        let res = await fetch(`${dataBaseUrl}/posts.json`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(postData)
        })
        let data = await res.json()
        return data
    },
    async getAll() {
        let res = await fetch(`${dataBaseUrl}/posts.json`)
        let data = await res.json()
        if (!data) {
            return {}
        }
        return Object.keys(data).map(key => ({ key, ...data[key] }))

    },
    async getOne(id) {
        let res = await fetch(`${dataBaseUrl}/posts/${id}.json`)
        let data = await res.json()
        return data
    },
    async deleteOne(id) {
        let res = await fetch(`${dataBaseUrl}/posts/${id}.json`, {
            method: 'DELETE'
        })
        let data = await res.json()
        return data
    },
    async editOne(id, elements) {

        let res = await fetch(`${dataBaseUrl}/posts/${id}.json`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(elements)
        })
          return res

    },
}


