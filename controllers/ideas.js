const Idea = require('../models/idea');

function ideasIndex(req, res) {
  Idea.find((err, ideas) => {
    if (err) return res.status(500).json({ message: 'Something went wrong.' });
    return res.status(200).json(ideas);
  });
}

function ideasCreate(req, res){
  const idea = new Idea(req.body);
  idea.save((err, idea) => {
    if (err) return res.status(500).json({ message: 'Something went wrong.' });
    return res.status(201).json(idea);
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

module.exports = {
  index: ideasIndex,
  create: ideasCreate,
  show: ideasShow,
  update: ideasUpdate,
  delete: ideasDelete
};
