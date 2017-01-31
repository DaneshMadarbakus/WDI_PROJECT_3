const mongoose = require('mongoose');

const voteSchema = new mongoose.Schema({
  vote: { type: String, trim: true, required: true},
  user: { type: mongoose.Schema.ObjectId, ref: 'User' }
},{
  timestamps: true
});

module.exports = mongoose.model('Vote', voteSchema);
