class ChristmasDinner {
    constructor(_budget) {
        this.budget = _budget
        Object.assign(this, { products: [], dishes: [], guests: {} })
        // this._showAttendence = this.showAttendence;
    }
    
    
    set budget (_budget) {
        if(_budget < 0) {
            throw new Error ('The budget cannot be a negative number')
        } else {
            return _budget
        }
        
    }

    shopping(products) {
        let [name, price] = products //['samal',1234lv]
        if (this.budget - +price > 0) {
            this.products.push(name)
            this.budget -= +price
           return `You have successfully bought ${name}!`
        } else {
         //  console.log(this.budget)
            throw new Error('Not enough money to buy this product')
        }
    }

    recipes(recipe) {
        let recipeName = recipe.recipeName
        let productList = recipe.productsList
        let isHere = true
        productList.forEach(p => {

            if (!this.products.includes(p)) {
                isHere = false
            }
        });
        if (isHere) {
            this.dishes.push({ recipeName, productList })
            console.log(`${recipeName} has been successfully cooked!`)
        } else {
            throw new Error( `We do not have this product`)
        }
    }

    inviteGuests(name, dish) {
        if (!(this.dishes.find(el => el.recipeName == dish))) {
            throw new Error('We do not have this dish')
        }
        let names = Object.keys(this.guests)

        if (names.includes(name)) {
            throw new Error('This guest has already been invited')
        }

        this.guests[name] = dish
        console.log(`You have successfully invited ${name}!`)

    }

    // get showAttendence(){
    //     let result = ''
    //     let getProds =  (dish) =>  {
    //         let el = this.dishes.find(el=> el.recipeName == dish)
    //         return el.productList
    //     }
    //     Object.entries(this.guests).forEach(el=> {
    //         let name = el[0]
    //         let dish = el[1]
    //         let res = ''
    //         getProds(dish).forEach(el=> res += el + ", " )
    //         result += `${name} will eat ${dish}, which consists of ${res}\n`
    //     })
    //     return result
    // }
    // set _showAttendence (showAttendence) {
    //     return showAttendence
    // }

    showAttendance() {
        let result = []
        let getProds = (dish) => {
            let el = this.dishes.find(el => el.recipeName == dish)
            return el.productList
        }
        Object.entries(this.guests).forEach(el => {
            let name = el[0]
            let dish = el[1]
            let res = getProds(dish).join(", ")

            result.push(`${name} will eat ${dish}, which consists of ${res}`) 
        })
        return result.join('\n')
    }
    
}
    let dinner = new ChristmasDinner(124);
    
    dinner.shopping(['Salt', 1]);
    dinner.shopping(['Beans', 3]);
    dinner.shopping(['Cabbage', 4]);
    dinner.shopping(['Rice', 2]);
    dinner.shopping(['Savory', 1]);
    dinner.shopping(['Peppers', 1]);
    dinner.shopping(['Fruits', 40]);
    dinner.shopping(['Honey', 10]);
    
    dinner.recipes({
        recipeName: 'Oshav',
        productsList: ['Fruits', 'Honey']
    });
    dinner.recipes({
        recipeName: 'Folded cabbage leaves filled with rice',
        productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
    });
    dinner.recipes({
        recipeName: 'Peppers filled with beans',
        productsList: ['Beans', 'Peppers', 'Salt']
    });
    
    dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
    dinner.inviteGuests('Georgi', 'Peppers filled with beans');
    dinner.inviteGuests('Ivan','Oshav')
    console.log(dinner.showAttendance());
    console.log(dinner.budget)


//let din = new ChristmasDinner(2330)
// din.shopping(['qica',15])
// din.shopping(['mlqko',20])
// din.recipes({
//     recipeName: 'Palachinki',
// productsList: ['qica','mlqko']
// })
// console.log(din)

// din.shopping(['kartofi', 5])
// din.shopping(['kaima', 10])
// din.shopping(['duvki', 1])
// din.recipes({
//     recipeName: 'Musakaaa',
//     productsList: ['kartofi', 'kaima']
// })
// din.recipes({
//     recipeName: 'browni',
//     productsList: ['duvki','kaima']
// })
// din.inviteGuests('Icko','browni')
// din.inviteGuests('gosho', 'Musakaaa')
// din.inviteGuests('goshos', 'Musakaaa')
// console.log(din.showAttendence)

