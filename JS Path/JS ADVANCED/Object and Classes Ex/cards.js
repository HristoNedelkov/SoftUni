let result = (function () {
    let Suits = {
        SPADES: '♠',
        HEARTS: '♥',
        DIAMONDS: '♦',
        CLUBS: '♣',
        
    }
    let cards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Qs", "K", "A"];
    class Card {
        constructor(face, suit) {
            this.face = face
            this.suit = suit;
        }
        get face () {
            console.log(this)
            if(cards.includes(this)) {
                return this
            } else {
                throw new Error('Not how you want to do it')
            }
        }
        set face(value) {
            
            if (cards.includes(value)) {
                this.face = value
                return
            }

            throw new Error ('Not valid')
        }
    }


    return {
        Suits: Suits,
        Card,
    }
}())

let Card = result.Card
let suits = result.Suits
let card = new Card("Q", suits.CLUBS)
console.log(card)