function solve(arr) {
    let product = arr[0]
    let restourant = arr[1]
    let dishes = +arr[2]
    let sym = arr[3]
    let bill = 0

    switch (restourant) {
        case 'Sushi Zone':
            switch (product) {
                case "sashimi":
                bill += 4.99
                    break;
                case "maki":
                bill += 5.29
                    break;
                case "uramaki":
                    bill += 5.99
                    break;
                case "temaki":
                    bill += 4.29
                    break;

                
            }
            break;
        case 'Sushi Time':
            switch (product) {
                case "sashimi":
                bill += 5.49
                    break;
                case "maki":
                bill += 4.69
                    break;
                case "uramaki":
                    bill += 4.49
                    break;
                case "temaki":
                    bill += 5.19
                    break;

                
            }

            break;

        case 'Sushi Bar':
            switch (product) {
                case "sashimi":
                bill += 5.25
                    break;
                case "maki":
                bill += 5.55
                    break;
                case "uramaki":
                    bill += 6.25
                    break;
                case "temaki":
                    bill += 4.75
                    break;

                
            }

            break;
        case 'Asian Pub':
            switch (product) {
                case "sashimi":
                bill += 4.50
                    break;
                case "maki":
                bill += 4.80
                    break;
                case "uramaki":
                    bill += 5.50
                    break;
                case "temaki":
                    bill += 5.50
                    break;

                
            }

            break;

        default:
            console.log(`${restourant} is invalid restaurant!`)
            
            return
            break;
    }
    bill*= dishes
    let forHomePrice = bill + (bill * 0.2)
    if (sym == 'Y') {
        console.log(`Total price: ${Math.ceil(forHomePrice)} lv.`)
    } else {

        console.log(`Total price: ${Math.ceil(bill)} lv.`)
    }
}
solve(['maki', 'Sushi Zone', '4', 'Y', '']
)