const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
   console.log('???')
    res.redirect('/products');
});

router.get('/about', (req, res) => {
    res.render('about', {title: 'About'});
});

module.exports = router;