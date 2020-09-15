function validatePIN(pin) {
    let arrPin = pin.split()

    for (const n of arrPin) {
        if (n >= 0 && n <= 9) {

        } else {
            return false
        }

    }
    if (pin.length == 4 || pin.length == 6) {


        return true

    } else {
        return false
    }
}
validatePIN('1234')