const router = require('express').Router();
const userService = require('../service/userService');

router.get('/login', (req, res) => {
    res.render("login");
})

router.get('/register', (req, res) => {
    res.render("register");
})

router.post('/login', (req, res) => {
    const {email, password} = req.body;
    res.redirect('/');
})

router.post('/register', async (req, res) => {
    const {firstName, lastName, email, password, repeatPassword} = req.body;

    await userService.register({firstName, lastName, email, password, repeatPassword});
    res.redirect('/users/login');
})


module.exports = router