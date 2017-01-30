const mongoose = require('mongoose');

const ideaSchema = new mongoose.schema({
  idea: {type: String, required: true},
  company: {type: String}
});

module.exports = mongoose.model('Idea', ideaSchema);
