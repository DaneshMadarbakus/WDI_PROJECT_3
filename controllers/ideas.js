const Idea = require('../models/idea');

function ideasIndex(req, res) {
  Idea.find((err, ideas) => {
    if (err) return res.status(500).json({ message: 'Something went wrong.' });
    return res.status(200).json(ideas);
  });
}

function ideasNew(){

}

function ideasCreate(){

}

function ideasShow(req, res){
  Idea.findById(req.params.id, (err, idea) => {
    if (err) return res.status(500).json({ message: 'Something went wrong.'});
    return res.status(200).json(idea);
  });
}

function ideasEdit(){

}

function ideadsUpdate(req, res){
  Idea.findByIdAndUpdate(req.params.id, req.body.idea, { new: true}, (err, idea) => {
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
  new: ideasNew,
  create: ideasCreate,
  show: ideasShow,
  edit: ideasEdit,
  update: ideadsUpdate,
  delete: ideasDelete
};
