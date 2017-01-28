const User = require('../models/user.js');

function usersIndex(req, res){
  User.Find((err, users) => {
    if (err) return res.status(500).json({message: 'Something went wrong.'});
  });
  return res.status(200).json(users);
}

module.exports = {
  index: usersIndex
};
