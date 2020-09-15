function passwordsVali(password) {


    function hasNumber(password) {
        let isTrue = /\d/.test(password);

        return isTrue
    }

    function lengthVAli(password) {
        return password.length >= 6 && password.length <= 10
    }

    function containsValidator(password) {
        let characters = password.split('')

        for (let letter of characters) {
            let assciiValue = letter.charCodeAt()

            if (!isDigit(assciiValue) || !isLowerLetter(assciiValue)) {
                return false
            }
        }
        function isDigit(char) {
            return char >= 48 && char <= 57
        }
        
        function isLowerLetter(char) {
            return char >= 97 && char <= 122
        }

    }

    if (lengthVAli(password)) {

    } else {
        console.log('Password must be between 6 and 10 characters')
    }

    if (containsValidator(password)) {
    } else {
        console.log('Password must consist only of letters and digits')

    }

    if (hasNumber(password) == true) {
        
    } else  {
        
        console.log("Password must have at least 2 digits")
    }

}
passwordsVali('logIn')