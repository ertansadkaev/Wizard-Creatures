const router = require('express').Router();
const userService = require('../service/userService');

router.get('/login', (req, res) => {
    res.render("login");
})

router.get('/register', (req, res) => {
    res.render("register");
})

router.get("/logout", (req, res) => {
  res.clearCookie('token');
  res.redirect("/");
})

router.post('/login', async (req, res) => {
    const {email, password} = req.body;

    const token = await userService.login(email, password);
    
    res.cookie('token', token, {httpOnly: true});
    res.redirect('/'); 
});
   

router.post('/register', async (req, res) => {
    const { firstName, lastName, email, password, repeatPassword } = req.body;
  
    try {
      await userService.register({ firstName, lastName, email, password, repeatPassword });
  
      res.redirect('/users/login');
    } catch (error) {
      console.log(`Error: ${error}`);
    }
})


module.exports = router;