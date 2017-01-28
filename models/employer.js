const mongoose  = require('mongoose');
const bcrypt    = require('bcrypt');
const validator = require('validator');

const employerSchema = new mongoose.Schema({
  email: {type: String, unique: true, required: true, trim: true},
  passwordHash: {type: String, required: true}

});

employerSchema.virtual('password').set(setPassword);
