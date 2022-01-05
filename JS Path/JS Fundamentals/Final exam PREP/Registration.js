function solve(arr) {
    let nUsers = arr.shift()
    function isValidName(name) {
        let isValid = true
        if (name == undefined) {
            return false
        }
        if (name.length < 3) {
            isValid = false
        }
        if (name[0].toUpperCase() !== name[0]) {
            isValid = false
        }
        for (let char of (name.slice(1, name.length)).split('')) {
            if (char.toLowerCase() !== char) {
                isValid = false
            }
        }
        return isValid
    }

    function isValidPass(pass) {
        let isValid = true
        function isAlphanumeric(char) {
            return char.match(/[^\w]|_/) == null;
        }
        if (pass.length < 6) {
            return false
        }
        if (pass[pass.length - 1] != +pass[pass.length - 1]) {
            return false
        }
        let firstFive = pass.slice(0, 5)
        for (const char of firstFive) {
            if (!isAlphanumeric(char)) {
                return false
            }
        }


        return isValid
    }
    let counter = 0

    for (let i = 1; i <= nUsers; i++) {
        let line = arr.shift()
        let name = line.split('U$')[1]
        let pass = line.split('P@$')[1]

        if (isValidName(name) && isValidPass(pass)) {
            console.log(`Registration was successful
Username: ${name}, Password: ${pass}`)
            counter++
        } else {
            console.log(`Invalid username or password`);

        }

    }
    console.log(`Successful registrations: ${counter}`)
}

console.log(solve(['2', 'U$TommyU$P@$asdqwe123P@$', 'Sara 1232412']
));
