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
  const company = new Company(req.body.company);
  company.save(err => {
    company.push.user =req.body.user;
    if (err) return res.render('companies/new', { error: err.message });
    return res.redirect('/companies');
  )
});
}

function companiesIndex(req, res) {
  Company.find((err, companies) => {
    if (err) return res.status(500).json({message: 'Something went wrong.'});
    return res.status(200).json(companies);
  });
}

function companiesShow(req, res) {
  Company.findById(req.params.id, (err, company) =>{
    if (err) return res.status(500).json({message: 'Something went wrong trying show Company'});
    if(!company) return res.status(404).json({message: 'No Company was found '});
    return res.status(200).json(company);
  });
}

function companiesUpdate(req, res){
  Company.findByIdAndUpdate(req.params.id, req.body.company, { new: true}, (err, company) => {
    if (err) return res.status(500).json({message: 'Something went wrong trying update Company'});
    if(!company) return res.status(404).json({message: 'No Company was found '});
    return res.status(200).json(company);
  });
}

function  companiesDelete(req, res){

}

module.exports = {
  index: companiesIndex,
  create: companiesCreate,
  update: companiesUpdate,
  delete: companiesDelete,
  show: companiesShow,
  new: companiesNew
};
