const User   = require('../models/user');
const jwt    = require('jsonwebtoken');
const config = require('../config/config');

function userAuthenticationsRegister(req, res){

<<<<<<< HEAD
  User.create(req.body.user, (err, user) => {
    if (err) return res.status(500).json({ message: 'Something went wrong with authenticating a new user', err});
=======
  User.create(req.body, (err, user) => {
    if (err) return res.status(400).json({ message: 'Something went wrong with authenticating a new user', err});
>>>>>>> 7ad556dd50799689c5cb1f4d137a93586147d9e0
    const token = jwt.sign({id: user.id}, config.secret, {expiresIn: 60*60*24*7});
    return res.status(201).json({
      user,
      token
    });
  });
}

function userAuthenticationLogin(req, res){
<<<<<<< HEAD
  console.log('login', req.body);
=======
>>>>>>> 7ad556dd50799689c5cb1f4d137a93586147d9e0
  User.findOne({ email: req.body.email}, (err, user) => {
    if(err) return res.status(500).json({message: 'something went wrong with  authenticating user login'});
    if(!user || !user.validatePassword(req.body.password)){
      return res.status(401).json({message: 'Unauthorized biittchchhh'});
    }
    const token = jwt.sign({id: user.id}, config.secret, {expiresIn: 60*60*24*7});
    return res.status(201).json({
      user,
      token
    });
  });
}

function assign(req, res, next) {
  console.log('firing');
  const token = req.headers['authorization'].split(' ')[1];
  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) return res.status(401).json({ message: 'Incorrect payload provided.' });
    User
      .findById(decoded.id, (err, user) => {
        if (err) return res.status(500).json({ message: 'Something went wrong.' });
        res.user = user;
        next();
      });
  });
}

module.exports = {
  register: userAuthenticationsRegister,
  login: userAuthenticationLogin,
  assign: assign
};
