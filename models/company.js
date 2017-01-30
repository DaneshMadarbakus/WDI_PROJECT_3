const mongoose = require('mongoose');

const companySchema = new mongoose.schema({
  comanyName: {type: String, required: true},
  user: {type: String}
});
