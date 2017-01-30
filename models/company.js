const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  name:    { type: String, trim: true, required: true},
  description: {type: String, trim: true},
  website:   {type: String, trim: true},
  createdByUser:  { type: mongoose.Schema.ObjectId, ref: 'User'},
  ideas: [{ type: mongoose.Schema.ObjectId, ref: 'Idea'}]
},{
    timestamps: true
});

module.exports = mongoose.model('Company', companySchema);
