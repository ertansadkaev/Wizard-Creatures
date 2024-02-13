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

    const user = await userService.login(email, password);
    console.log({ user });

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