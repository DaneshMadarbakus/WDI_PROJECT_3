const Idea    = require('../models/idea');
const Company = require('../models/company');

/*
* POST /companies/:id/ideas
*/
function ideasCreate(req, res){
  Company.findById(req.params.id, (err, company) => {
    if (err) return res.status(500).json({ message: 'Something went wrong.' });
    if (!company) return res.status(404).json({ message: 'Company not found.' });

    const idea   = new Idea(req.body.idea);
    idea.company = company._id;
    idea.creator = req.user._id;

    idea.save((err, idea) => {
      if (err) return res.status(500).json({ message: 'Something went wrong.' });
      return res.status(201).json(idea);
    });
  });
}

function ideasShow(req, res){
  Idea.findById(req.params.id, (err, idea) => {
    if (err) return res.status(500).json({ message: 'Something went wrong.'});
    return res.status(200).json(idea);
  });
}

function ideasUpdate(req, res){
  console.log('fired', req.body);
  Idea.findByIdAndUpdate(req.params.id, req.body, { new: true}, (err, idea) => {
    if (err) return res.status(500).json({message: 'Something went wrong trying update Idea'});
    if(!idea) return res.status(404).json({message: 'No Idea was found '});
    return res.status(200).json(idea);
  });
}

function ideasDelete(req, res){
  Idea.findByIdAndRemove(req.params.id, (err, idea) => {
    if (err) return res.status(500).json({ message: 'Something went wrong with deleting this idea '});
    if(!idea) return res.status(404).json({message: 'No Idea was found'});
  });
}

function ideasUpvote(req, res) {
  Idea.findById(req.params.id, (err, idea) => {
    if(idea.downvotes.indexOf(req.user.id) === -1) {
      Idea.findByIdAndUpdate(req.params.id, { $addToSet: { upvotes: req.user.id }}, () => {
        return res.status(200).json({ message: 'Upvote has been successfully made'});
      });
    }
  });
}

function ideasDownvote(req, res) {
  Idea.findById(req.params.id, (err, idea) => {
    if(idea.upvotes.indexOf(req.user.id) === -1) {
      Idea.findByIdAndUpdate(req.params.id, { $addToSet: { downvotes: req.user.id }}, () => {
        return res.status(200).json({ message: 'Downvote has been successfully made'});
      });
    }
  });
}

module.exports = {
  create: ideasCreate,
  show: ideasShow,
  update: ideasUpdate,
  delete: ideasDelete,
  upvote: ideasUpvote,
  downvote: ideasDownvote
};
