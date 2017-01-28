const mongoose  = require('mongoose');
const bcrypt    = require('bcrypt');
const validator = require('validator');

const employerSchema = new mongoose.Schema({
  email: {type: String, unique: true, required: true, trim: true},
  passwordHash: {type: String, required: true}

});

employerSchema.virtual('password').set(setPassword);

employerSchema.virtual('passwordConfirmation').set(setPasswordConfirmation);

employerSchema.path('passwordHash').validate(validatePassword);

employerSchema.path('email').validate(validateEmail);

employerSchema.methods.validatePassword;

employerSchema.set('toJSON', {
  transform: function(doc, ret) {
    delete ret.passwordHash;
    delete ret.__v;
    return ret;
  }
});

module.exports = mongoose.model('User', employerSchema);

function setPassword(value) {
  this._password    = value;
  this.passwordHash = bcrypt.hashSync(value, bcrypt.genSaltSync(8));

}

function setPasswordConfirmation() {

}
