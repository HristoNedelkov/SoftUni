function solve(arr) {
    let stringArr = arr.shift().split('')

    let command = arr.shift()

    while (command !== 'End') {
        let theCommandWord = command.split(' ')[0]
        let searchedChar = command.split(' ')[1]
        let charReplacing = command.split(' ')[2]



        switch (theCommandWord) {


            case 'Translate':


                for (let i in stringArr) {
                    let char = stringArr[i]



                    if (char == searchedChar) {
                        stringArr.splice(i, 1, charReplacing)
                    }
                }
                console.log(stringArr.join(''));
                break;


            case 'Includes':
                if (stringArr.includes(searchedChar)) {
                    console.log("True");

                } else {
                    console.log('False');

                }


                break;

            case 'Start':
                let lengthStart = searchedChar.length
                let slicedPart = stringArr.slice(0, lengthStart).join('')



                if (searchedChar == slicedPart) {
                    console.log("True");

                } else {
                    console.log("False");

                }
                break;
            case 'Lowercase':

                console.log(stringArr.toString().toLowerCase().split(',').join(''));
                stringArr = stringArr.toString().toLowerCase().split(',')



                break;


            case 'FindIndex':
                let theIndex = ''
                for (const i in stringArr) {
                    let char = stringArr[i]
                    if (char == searchedChar) {
                        theIndex = i
                    }
                }
                console.log(theIndex);

                break;

            case 'Remove':
                stringArr.splice(searchedChar, charReplacing)
                console.log(stringArr.join(''));

                break;



            default:
                break;
        }
        command = arr.shift()
    }



}
solve([
    '//Thi5 I5 MY 5trING!//',
    'Translate 5 s',
    'Includes string',
    'Start //This',



    'End'
]
)