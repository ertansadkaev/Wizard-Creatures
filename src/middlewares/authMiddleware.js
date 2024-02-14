const jwt = require('../lib/jwt');
const { SECRET } = require('../constants');

exports.auth = async (req, res, next) => {
    const token = req.cookies["token"];

    if (token) {
        try {

            const decodedTokne = await jwt.verify(token, SECRET);
            req.user = decodedTokne;
            res.locals.user = decodedTokne;
            res.locals.isAuthenticated = true;

            next();
        } catch (error) {
            console.log(({ error }));
            res.clearCookie('token');
            res.redirect('/users/login');
        }
        return;
    } 
    
    next();
};

exports.isAuth = (req, res, next) => {
    if (!req.user) {
        return res.redirect ('/users/login');
    }
next();
};