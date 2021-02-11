const { Router } = require('express');
const router = Router();
const authService = require('../services/authService');


router.get('/login', (req, res) => {
    res.render('login')
});
router.post('/login', async (req, res) => {

    try {
        let token = await authService.login(req.body)
        res.cookie('USER_SESSION', token) 
        res.redirect('/products')
    } catch (error) {
        console.log(error)
        res.render('login', {error})
    }
})
router.get('/register', (req, res) => {
    res.render('register');
});


router.post('/register', async (req, res) => {
    try {
        await authService.register(req.body)
        res.redirect('/auth/login')
    } catch (error) {
        res.render('register', { error })
    }
});
module.exports = router;