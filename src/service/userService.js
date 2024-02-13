const User = require('../models/user');
const bcrypt = require('bcrypt');

exports.register = (userData) => User.create(userData);