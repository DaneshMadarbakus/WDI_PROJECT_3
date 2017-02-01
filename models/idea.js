const mongoose = require('mongoose');

const ideaSchema = new mongoose.Schema({
  idea: { type: String, required: true },
  company: { type: mongoose.Schema.ObjectId, ref: 'Company' },
  upvotes: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
  downvotes: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
  randomUsername: {type: String, required: true}
}, {
  timestamps: true
});

ideaSchema.pre('save', function(next) {
  return this.model('Company').findByIdAndUpdate(this.company, { $push: { ideas: this._id }}, next);
});

module.exports = mongoose.model('Idea', ideaSchema);
