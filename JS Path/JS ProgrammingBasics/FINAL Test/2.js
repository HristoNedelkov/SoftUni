function solve (arr) {
let first = arr.shift()
let second = arr.shift()
let thirth = arr.shift()

let won = 0
let lost = 0
let draw = 0


    if (+first[0] > +first[2]) {
        won++
    } else if(+first[0] == +first[2]) {
        draw++
    } else if(+first[0] < +first[2]) {
       lost++
    }
    

    if (+second[0] > +second[2]) {
        won++
    } else if(+second[0] == +second[2]) {
        draw++
    } else if(+second[0] < +second[2]) {
       lost++
    }
    
    if (+thirth[0] > +thirth[2]) {
        won++
    } else if(+thirth[0] == +thirth[2]) {
        draw++
    } else if(+thirth[0] < +thirth[2]) {
       lost++
    }

    console.log(
`Team won ${won} games.
Team lost ${lost} games.
Drawn games: ${draw}
    `);

}

solve([ '3:1', '0:2', '0:0' ])