const mongoose  = require('mongoose');
const bcrypt    = require('bcrypt');


const userSchema = new mongoose.Schema({
  email: {type: String, unique: true, trim: true, required: true},
  passwordHash: {type: String, required: true}
});

userSchema
  .virtual('password')
  .set(setPassword);

function setPassword(value){
  this._password = value;
  this.passwordHash = bcrypt.hashSync(value, bcrypt.genSaltSync(8));
}
