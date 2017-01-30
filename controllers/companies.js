const Company = require('../models/company');

// function companiesNew(req, res){
//   return res.render('companies/new', {error: null});
// }

function companiesCreate(req, res){
  console.log('ping');
  const company = new Company(req.body);
  company.save((err) => {
    // console.log(req.body.user);
    // company.push.user = req.body.user;
    // if (err) return res.render('companies/new', { error: err.message });
    if (err) console.log(err);
    return res.status(201).json(company);
    // return res.redirect('/companies');
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
  Company.findByIdAndRemove(req.params.id, (err, company) => {
    if (err) return res.status(500).json({ message: 'Something went wrong with deleting this Company '});
    if(!company) return res.status(404).json({message: 'No Company was found'});
  });
}

module.exports = {
  index: companiesIndex,
  create: companiesCreate,
  update: companiesUpdate,
  delete: companiesDelete,
  show: companiesShow
};