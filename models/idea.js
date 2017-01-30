const mongoose = require('mongoose');

const ideaSchema = new mongoose.Schema({
  idea: { type: String, required: true },
  company: { type: String }
}, {
  timestamps: true
});

module.exports = mongoose.model('Idea', ideaSchema);
