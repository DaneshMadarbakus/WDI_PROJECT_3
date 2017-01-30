const mongoose = require('mongoose');

const ideaSchema = new mongoose.schema({
  idea: {type: String, required: true},
  company: {type: String}
});
