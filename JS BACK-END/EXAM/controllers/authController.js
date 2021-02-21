const { Router } = require('express');
const router = Router();
const authService = require('../services/authService');
const { check, validationResult, body } = require('express-validator');


const { COOKIE_NAME } = require('../config/index');

const isAuth = require('../middlewares/isAuthenticated');
const isGuest = require('../middlewares/isGuest');
const { findByIdAndUpdate } = require('../models/User');

router.get('/login', isGuest, (req, res) => {
    res.render('login')
    req.user
});

router.post(
    '/login',
    isGuest,
    body('username', 'Enter all fields').notEmpty(),
    body('password', 'Enter all fields').notEmpty(),
    async (req, res) => {
        let result = validationResult(req)

        if (!result.isEmpty()) {
            console.log(result.errors)
            return res.render('login', { error: result.errors[0].msg, username: req.body.username, })

        }

        try {
            let token = await authService.login(req.body)
            res.cookie('USER_SESSION', token)
            res.redirect('/')
        } catch (error) {
            res.render('login', { error:error.message})
        }
    })
router.get('/register', isGuest, (req, res) => {
    res.render('register');
});


router.post(
    '/register',
    isGuest,
    body('username', 'at least 4 charecters long').isLength({ min: 4 }),
    check('password', 'pass is too short').isLength({ min: 4 }),
    body('password', 'enter all fields').notEmpty(),
    body('password', 'Username should consist only Alphabetical letters').matches(/^[A-Za-z\s]+$/),
    body('re-password', 'Passwords do not match').custom((value, { req }) => (value === req.body.password)),
    check('username', 'Enter Username').notEmpty(),
    body('amount', 'Amount Must be bigger than 0').custom((value) => value >= 0 || value == ''),
    async (req, res) => {
        try {
            let result = validationResult(req)

            if (!result.isEmpty()) {
                return res.render('register', { error: result.errors[0].msg, username: req.body.username, })

            }
            await authService.register(req.body)
            //await authService.login({ username: req.body.username, password: req.body.password })
            res.redirect('/auth/login')
        } catch (error) {
            let errors = Object.keys(error.errors).map(x => ({ msg: error.errors[x].message }));
            res.render('register', { error: errors[0] })
        }
    });




module.exports = router;