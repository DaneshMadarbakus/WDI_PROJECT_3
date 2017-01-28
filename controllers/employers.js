

const Employer = require('../models/employer');


function employersIndex(req, res){
  Employer.find((err, employer) => {
    if (err) return res.status(500).json({ message: 'Something went wrong'});
    return res.status(200).json(employer);
  });
}

function employersUpdate(req, res){
  Employer.findByIdAndUpdate(req.params.id, req.body.employer, {new: true}, (err, employer) => {
    if (err) return res.status(500).json({ message: 'Something went wrong.' });
    if (!employer) return res.status(404).json({ message: 'User not found.' });
    return res.status(200).json(employer);
  });
}

function employersDelete(req, res){
  Employer.findByIdAndRemove(req.params.id, (err, employer) => {
    if (err) return res.status(500).json({ message: 'Something went wrong.' });
    if (!employer) return res.status(404).json({ message: 'User not found.' });
    return res.status(204);
  });
}


module.exports = {
  index: employersIndex,
  update: employersUpdate,
  delete: employersDelete
};
