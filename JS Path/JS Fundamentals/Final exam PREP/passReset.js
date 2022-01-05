function solve(arr) {

    let text = arr.shift();
    let result = [];

    for (let item of arr) {
        
        let [command, char, char1] = item.split(" ");
        
        
        switch (command) {
            case "TakeOdd":
                 result = [];
                
                for (let i = 0; i < text.length; i++) {
                    if (i % 2 != 0) {
                        result.push(text[i])
                    }
                }
                result = result.join("")
                console.log(result);
                break;
            case "Cut":
                char = Number(char);
                char1 = Number(char1)
                password.substring(first, first + second);
                result = result.split("")
                result.splice(char, char1)
                result = result.join("")
                console.log(result);
                break;
            case "Substitute":
                if (result.includes(char)) {
                    while (result.includes(char)) {
                        result = result.replace(char, char1)
                    }
                    console.log(result);
                } else {
                    console.log(`Nothing to replace!`);
                }
                break;
            case "Done":
                console.log(`Your password is: ${result}`);

        }

    }

}
solve([
    'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ',
    'TakeOdd',
    'Cut 15 3',
    'Substitute :: -',
    'Substitute | ^',
    'Done'
])