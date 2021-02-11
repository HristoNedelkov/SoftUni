const { Router } = require('express');
const productService = require('../services/productService');
const accessoryService = require('../services/accessoryService');
const { validateProduct } = require('./helpers/productHelpers');

const router = Router();

router.get('/', (req, res) => {
    console.log('asfasf')
    let products = productService.getAll(req.query)
        .then(products => {

            res.render('home', { title: 'Browse', products });
        })
        .catch(e => {
            res.status(500).end()
        })
});

router.get('/create', (req, res) => {
    res.render('create', { title: 'Create' });
});

router.post('/create', validateProduct, (req, res) => {
    productService.create(req.body)
        .then(() => res.redirect('/products'))
        .catch(() => res.status(500).end())
});

router.get('/details/:productId', async (req, res) => {
    let product = await productService.getOne(req.params.productId)
    let accessories = await accessoryService.getAllOfCube(req.params.productId)
       await res.render('details', { title: 'Product Details', product, accessories })
    
})


router.get('/:productId/attach', async (req, res) => {
    let id = req.params.productId
    let product = await productService.getOne(id)
    let accessories = await accessoryService.getAllWithoutOwned(product.accessories)

    res.render('attachAccessory', { product, accessories })

})

router.post('/:productId/attach', (req, res) => {
    let accessoryId = req.body.accessory
    let cubeId = req.params.productId

    accessoryService.addAccessory(cubeId, accessoryId)
        .then((result) => {
            console.log(result)
            console.log('LOLLL!')
            res.redirect(`/products/details/${cubeId}`)
        })
        .catch(e => {
            res.status(500); console.log(e)
        })
})


module.exports = router;
