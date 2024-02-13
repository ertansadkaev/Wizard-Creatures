const User = require('../model/user');
const bcrypt = require('bcrypt');

exports.register = (userData) => User.create(userData);