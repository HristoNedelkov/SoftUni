function solve(arr1, arr2) {

    let avProducts = restock(arr1, {})
    let productsAfter = restock(arr2, avProducts)

    for (key in productsAfter) {

        let value = productsAfter[key];

        console.log(`${key} -> ${value}`);

    }


    function restock(arr, obj) {
        for (let index = 0; index < arr.length; index += 2) {

            const product = arr[index];
            const quantity = Number(arr[index + 1])

            if (!obj.hasOwnProperty(product)) {
                obj[product] = quantity
            } else {
                obj[product] += quantity
            }
        }
        return obj
    }


}

solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
)