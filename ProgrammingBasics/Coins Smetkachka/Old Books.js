function library(input) {
    let favoriteBook = input.shift()
    let numberOfBooks = +input.shift()

    let counter = 0
    let bookIsFound = false
    
    let nextBookName = input.shift()




    while (counter < numberOfBooks) {
       
        if (nextBookName == favoriteBook) {
            bookIsFound = true
            break
        }
        counter++
        nextBookName = input.shift()

    }

    if (bookIsFound == false) {
        console.log(`The book you search is not here!`)
        console.log(`You checked ${numberOfBooks} books.`)
    } else {

        console.log(`You checked ${counter} books and found it.`)
    }
}


library(["icko", '10', 'Stronger', 'Life Style', 'Troy', "osko", "sahdf", "icko"])