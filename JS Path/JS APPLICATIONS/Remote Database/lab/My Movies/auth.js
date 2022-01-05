var firebaseConfig = {
    apiKey: "AIzaSyCRN0fKDILduFGfXAjj4oamFyrDBcWXhEo",
    authDomain: "my-movies-77939.firebaseapp.com",
    databaseURL: "https://my-movies-77939.firebaseio.com",
    projectId: "my-movies-77939",
    storageBucket: "my-movies-77939.appspot.com",
    messagingSenderId: "816909761924",
    appId: "1:816909761924:web:6a33fc3e4a376079d771d1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

let buttonElement = document.getElementById('login-button');

buttonElement.addEventListener('click', onUserLogin)

function onUserLogin(e) {
    let usernameElement = document.getElementById('username');
    let passwrodElement = document.getElementById('password');
    let subHeaderElement = document.getElementById('sub-header');
    let loginFormElement = document.getElementById('login-form');

    auth.signInWithEmailAndPassword(usernameElement.value, passwrodElement.value)
        .then(res => {
            console.log('Successfuly logged in!');
            subHeaderElement.innerText = `Hello, ${res.user.email}`;
            loginFormElement.style.display = 'none';
        })
        .catch(err => {
            console.log('err:', err);
        })

}