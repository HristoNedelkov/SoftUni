const { Router } = require('express');
const router = Router();
const authService = require('../services/authService');
//const isAuth = require()
const {COOKIE_NAME} = require('../config/index');

const isAuth = require('../middlewares/isAuthenticated');
const isGuest = require('../middlewares/isGuest');

router.get('/login',isGuest, (req, res) => {
    res.render('login')
    req.user
});
router.post('/login', isGuest,async (req, res) => {

    try {
        let token = await authService.login(req.body)
        res.cookie('USER_SESSION', token) 
        res.redirect('/products')
    } catch (error) {
        console.log(error)
        res.render('login', {error})
    }
})
router.get('/register', isGuest,(req, res) => {
    res.render('register');
});


router.post('/register', isGuest,async (req, res) => {
    try {
        await authService.register(req.body)
        res.redirect('/auth/login')
    } catch (error) {
        res.render('register', { error })
    }
});

router.get('/logout',isAuth,(req,res)=> {

    res.clearCookie(COOKIE_NAME)
    res.redirect('/products')
})

module.exports = router;