const router = require('express').Router();

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

router.post('/register', (req, res) => {
    const {firstName, lastName, email, password, repeatPassword} = req.body;
    res.redirect('/users/login');
})


module.exports = router