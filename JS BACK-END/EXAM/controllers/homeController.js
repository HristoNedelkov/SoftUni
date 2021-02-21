const { Router } = require('express');
const expenseService = require('../services/expenseService');
const { check, validationResult, body } = require('express-validator');
const router = Router();
const { COOKIE_NAME } = require('../config/index');
let isAuth = require('../middlewares/isAuthenticated');
let isGuest = require('../middlewares/isGuest');

router.get('/', (req, res) => {
    if (req.user) {
        expenseService.getAll(req.user.user._id)
            .then(result => {
                res.render('expenses', { expenses: result, user: req.user })
            })
    } else {
        res.render('home')

    }
});
router.post('/', isAuth,body('amount', 'only number').isNumeric(), (req, res) => {

    let result = validationResult(req)

    if (!result.isEmpty()) {
        console.log('Enter only numeric!')
    }

    expenseService.addMoney(Number(req.body.amount), req.user.user._id)
        .then(result => {
            res.redirect('/')
            console.log(result)
        }).catch(e => console.log(e))
})

router.get('/create',isAuth, (req, res) => {
    res.render('new-expense')
})

router.post(
    '/create',
    isAuth,
    body('merchant', 'At least 4 charecters long merchant!').isLength({ min: 4 }).notEmpty(),
    body('total', 'Total should be positive number').custom(value => value > 0).notEmpty(),
    body('description', 'description should be between 3 and 30 charecters long!').isLength({ min: 3, max: 30 }).notEmpty(),
    (req, res) => {
        let result = validationResult(req)

        if (!result.isEmpty()) {
            return res.render('new-expense', { error: result.errors[0].msg, username: req.body.username, })
        } else {
            console.log(req.user.user)
            expenseService.create(req.body, req.user.user._id)
                .then(reult => {
                    console.log(reult)
                    res.redirect('/')
                }).catch(e => console.log(e))
        }
    })

router.get('/report/:expId',isAuth, (req, res) => {
    expenseService.getOne(req.params.expId)
        .then(result => {
            res.render('report', result)

        })
})

router.get('/stop/:expId',isAuth, (req, res) => {
    expenseService.stop(req.params.expId)
        .then(result => {
            console.log(result)
            console.log('You stopped ' + result._id + ' report')
            res.redirect('/')
        })
})

router.get('/profile', isAuth,(req, res) => {
    expenseService.getUser(req.user.user._id).then(result => {

        res.render('account-info', { amount: result.amount })
    })
})
router.get('/logout', isAuth, (req, res) => {

    res.clearCookie(COOKIE_NAME)
    res.redirect('/')
})
module.exports = router;