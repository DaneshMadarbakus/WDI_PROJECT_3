const mongoose  = require('mongoose');
const bcrypt    = require('bcrypt');
const validator = require('validator');

const employerSchema = new mongoose.Schema({
  email: {type: String, unique: true, required: true, trim: true},
  passwordHash: {type: String, required: true}
}, {
  timestamps: true
});

employerSchema.virtual('password').set(setPassword);

employerSchema.virtual('passwordConfirmation').set(setPasswordConfirmation);

employerSchema.path('passwordHash').validate(validatePasswordHash);

employerSchema.path('email').validate(validateEmail);

employerSchema.methods.validatePassword = validatePassword;

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

function setPasswordConfirmation(passwordConfirmation) {
  this._passwordConfirmation = passwordConfirmation;
}

function validatePasswordHash() {
  if (this.isNew) {
    if (!this._password) {
      return this.invalidate('password', 'A password is required.');
    }

    if (this._password.length < 6) {
      this.invalidate('password', 'must be at least 6 characters.');
    }

    if (this._password !== this._passwordConfirmation) {
      return this.invalidate('passwordConfirmation', 'Passwords do not match.');
    }
  }
}

function validateEmail(email) {
  if (!validator.isEmail(email)) {
    return this.invalidate('email', 'must be a valid email address');
  }
}

function validatePassword(password){
  return bcrypt.compareSync(password, this.passwordHash);
}
