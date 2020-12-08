class ChristmasDinner {
    constructor(budget) {
        this.budget = (() => {
            if (budget > 0) {
                return budget
            }
            throw new Error('Budget cannot be negative num!')
        })()
        Object.assign(this, { products: [], dishes: [], guests: {} })
    }

    shopping(products) {
        let [name, price] = products //['samal',1234lv]
        if (this.budget - +price > 0) {
            this.products.push(name)
            this.budget -= +price
            console.log(`You have successfully bought ${name}!`)
        } else {
            throw new Error('Not enough money to buy this product')
        }
    }
    recipes (recipe) {
        let recipeName = recipe.recipeName
        let productList = recipe.productsList
       let isHere = true
        productList.forEach(p => { 
            if(!this.products.includes(p)) {
                isHere =  false  
            }
        });
        if(isHere) {
            this.dishes.push({recipeName,productList})
            console.log(`${recipeName} has been successfully cooked!`)
        } else {
            console.log(`We do not have this product`)
        }
    }
    

}

let din = new ChristmasDinner(20)
// din.shopping(['qica',15])
// din.shopping(['mlqko',20])
// din.recipes({
//     recipeName: 'Palachinki',
// productsList: ['qica','mlqko']
// })
// console.log(din)

din.shopping(['kartofi',5])
din.shopping(['kaima',10])
din.shopping(['duvki',1])
din.recipes({
    recipeName: 'Musakaaa',
    productsList: ['kartofi','kaima']
})
console.log(din)