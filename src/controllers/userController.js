const router = require('express').Router();
const userService = require('../service/userService');

router.get('/login', (req, res) => {
    res.render("login");
})

router.get('/register', (req, res) => {
    res.render("register");
})

router.post('/login', async (req, res) => {
    const {email, password} = req.body;

    await userService.login({email, password});
    res.redirect('/');
})

router.post('/register', async (req, res) => {
    const {firstName, lastName, email, password, repeatPassword} = req.body;

    await userService.register({firstName, lastName, email, password, repeatPassword});
    res.redirect('/users/login');
})


module.exports = router