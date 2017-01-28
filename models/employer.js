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

employerSchema.methods.validatePassword();

function setPassword() {

}

function setPasswordConfirmation() {

}
