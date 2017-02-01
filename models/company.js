const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  name: { type: String, trim: true, required: true},
  description: {type: String, trim: true},
  website: {type: String, trim: true},
  owner: { type: mongoose.Schema.ObjectId, ref: 'User' },
  ideas: [{ type: mongoose.Schema.ObjectId, ref: 'Idea' }],
  image: { type: String }
},{
  timestamps: true
});

companySchema.pre('save', function(next) {
  return this.model('User').findByIdAndUpdate(this.owner, { $push: { companies: this._id }}, next);
});

module.exports = mongoose.model('Company', companySchema);
