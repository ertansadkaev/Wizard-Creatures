const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('../lib/jwt');
const { SECRET } = require('../constants');


exports.register = (userData) => User.create(userData);

exports.login = async (email, password) => {
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error ("Invalid email or password!");
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
        throw new Error ("Invalid email or password!");
    }

    const payload = { _id: user._id, email: user.email };
    const token = await jwt.sign(payload, SECRET, {expiresIn: '3d'});

    return token;
};