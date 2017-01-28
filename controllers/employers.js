

const Employer = require('../models/employer');


function employersIndex(req, res){
  Employer.find((err, employers) => {
    if (err) return res.status(500).json({ message: 'Something went wrong'});
    return res.status(200).json(employers);
  });
}

function employersUpdate(req, res){

}

function employersDelete(req, res){

}


module.exports = {
  index: employersIndex,
  update: employersUpdate,
  delete: employersDelete
};
