const Accessory = require('../models/Accessory');
const Cube = require('../models/Cube');

async function getAll(query) {
    let products = await Cube.find({}).lean()

    if (query.search) {
        products = products.filter(x => x.name.toLowerCase().includes(query.search));
    }

    if (query.from) {
        products = products.filter(x => Number(x.level) >= query.from);
    }

    if (query.to) {
        products = products.filter(x => Number(x.level) <= query.to);
    }

    return products;
}

async function getOne(id) {
    return await Cube.findById(id).lean();
}
async function attachAccessory(productId, accId) {
    let product = await Cube.findById(productId)
    let accessory = await Accessory.findById(accId)

    product.accessories.push(accessory)
    return product.save()

    //Thats not the most secure way of doing it!
    // You can use the survice in accessory survices!
}

function create(data) {
    let cube = new Cube(data);
    // return productData.create(cube)
    return cube.save()
}

module.exports = {
    getAll,
    getOne,
    create,
    attachAccessory,

}