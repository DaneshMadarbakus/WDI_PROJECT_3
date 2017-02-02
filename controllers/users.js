
const User = require('../models/user');
const jwt    = require('jsonwebtoken');
const config = require('../config/config');

function usersIndex(req, res){
  User.find((err, users) => {
    if (err) return res.status(500).json({message: 'Something went wrong.'});
    return res.status(200).json(users);
  });
}

function usersShow(req, res){
  const token = req.headers['authorization'].split(' ')[1];

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) return res.status(401).json({ message: 'Incorrect payload provided.' });
    User.findById(decoded.id).populate('companies').exec((err, user) =>{
      if (err) return res.status(500).json({message: 'Something went wrong trying show User'});
      if(!user) return res.status(404).json({message: 'No User was found '});
      return res.status(200).json(user);
    });
  });
}

function usersUpdate(req, res){
  User.findByIdAndUpdate(req.params.id, req.body.user, { new: true}, (err, user) => {
    if (err) return res.status(500).json({message: 'Something went wrong trying update User'});
    if(!user) return res.status(404).json({message: 'No User was found '});
    return res.status(200).json(user);
  });
}

function usersDelete(req, res){
  User.findByIdAndRemove(req.params.id, (err, user) => {
    if (err) return res.status(500).json({ message: 'Something went wrong with deleting this user '});
    if(!user) return res.status(404).json({message: 'No User was found'});
    return res.status(200).json({ message: 'user deleted'});
  });
}


module.exports = {
  index: usersIndex,
  show: usersShow,
  update: usersUpdate,
  delete: usersDelete
};
