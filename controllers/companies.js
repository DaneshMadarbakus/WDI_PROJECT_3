const User    = require('../models/user');
const Company = require('../models/company');

function companiesNew(req, res){
  return res.render('companies/new', {error: null});
}

function companiesCreate(req, res){
  User.findById(req.params.id, (err, user) => {
    if (err) return res.status(500).json(err);
    if (!user) return res.status(404).json({ error: 'No user was found.' });

  });
}

function companiesIndex(req, res) {

}
function companiesShow(req, res) {

}

function companiesUpdate(req, res){

}

function  companiesDelete(req, res){

}

module.exports = {
  index: companiesIndex,
  create: companiesCreate,
  update: companiesUpdate,
  delete: companiesDelete,
  show: companiesShow
};
