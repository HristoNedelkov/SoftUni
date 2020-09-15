function solve(arr) {
    let wagonsNumbers = arr.shift().split(' ')

    const maxCap = +arr.shift()

    arr.forEach(function (element) {



        if (element.includes("Add")) {

            let tokens = element.split(' ')
            if (tokens.length == 2) {
                wagonsNumbers.push(+(tokens[1]))
            } else {
                wagonsNumbers.push(+(tokens[0]))
            }
           

        } else {

            for (let index = 0; index < wagonsNumbers.length; index++) {
                let item = wagonsNumbers[index];


                if (item <= maxCap - element) {

                    let newNum = wagonsNumbers[index]
                    let newWagon = +newNum + +element
                    wagonsNumbers[index] = newWagon
                    break
                }


            };


        }
    });
    let result = ''
    wagonsNumbers.forEach(function (element) {
        result += element + " "
    })
    console.log(result)



}

solve(
    ['32 54 21 12 4 0 23 66 10',
'75',
'Add 10',
'Add 0',
'30',
'10',
'Add 16',
'75', 
'34']


)


   //the element is String
//only the first num is incorect