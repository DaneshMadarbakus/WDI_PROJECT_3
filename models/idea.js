const mongoose = require('mongoose');

const ideaSchema = new mongoose.Schema({
  idea: { type: String, required: true },
  company: { type: mongoose.Schema.ObjectId, ref: 'Company' }
}, {
  timestamps: true
});

ideaSchema.pre('save', (next) => {
  return this.model('Company').findByIdAndUpdate(this.company, { $push: { ideas: this._id }}, next);
});

module.exports = mongoose.model('Idea', ideaSchema);
