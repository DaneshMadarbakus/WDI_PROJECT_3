const User   = require('../models/user');
const jwt    = require('jsonwebtoken');
const config = require('../config/config');

function userAuthenticationsRegister(req, res){
  User.create(req.body, (err, user) => {
    if (err) return res.status(500).json({ message: 'Something went wrong with Authenticating a new User'});
    const token = jwt.sign({id: user.id}, config.secret, {expiresIn: 60*60*24*7});
    return res.status(201).json({
      user,
      token
    });
  });
}

module.exports = {
  userRegister: userAuthenticationsRegister(),
};
