const User = require('../models/user');
const bcrypt = require('bcrypt');



exports.register = (userData) => User.create(userData);

exports.login = async (email, password) => {
    const user = await User.findOne({email});

    if (!user) {
        throw new Error ("Invalid email or password!");
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
        throw new Error ("Invalid email or password!");
    }
}