const mongoose  = require('mongoose');
const bcrypt    = require('bcrypt');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  email: {type: String, unique: true, trim: true, required: true},
  passwordHash: {type: String, required: true}
});

userSchema
  .virtual('password')
  .set(setPassword);

userSchema
  .virtual('passwordConfirmation')
  .set(setPasswordConfirmation);

userSchema
  .path('passwordHash')
  .validate(validatePasswordHash);

module.exports = mongoose.model('User', userSchema);

function setPassword(value){
  this._password = value;
  this.passwordHash = bcrypt.hashSync(value, bcrypt.genSaltSync(8));
}

function setPasswordConfirmation(passwordConfirmation) {
  this._passwordConfirmation = passwordConfirmation;
}

function validatePasswordHash(){
  if(this.isNew){
    if(!this._password){
      return this.invalidate('password', 'A password is required.')
    }
    if(!this._password.length < 6){
      return this.invalidate('password', 'A password must be at least 6 characters');
    }
    if(!this._password !== this._passwordConfirmation){
      return this.invalidate('passwordConfirmation', 'Passwords do not match');
    }
  }
}
