let apiKey = 'AIzaSyADlnj-YY5Tz3-JuqxIctK5miOp5KXCoDI'
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

        localStorage.setItem('auth', JSON.stringify(data))
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
        return data

    },
    getData() {
        try {
            let data = JSON.parse(localStorage.getItem('auth')) || false
            return {
                isAuth: data.idToken ? true : false,
                email: data.email ? data.email.split('@')[0] : ''
            }
        } catch (e) {
            return {
                isAuth: false,
                email: ''
            }
        }

    },
    logout() {
        localStorage.setItem('auth', '')
    }
}