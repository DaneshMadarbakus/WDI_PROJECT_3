const express = require('express');
const router = express.Router();

const staticsController = require('../controllers/statics');
const usersController = require('../controllers/users');
const companiesController = require('../controllers/companies');

const authentications = require('../controllers/user-authentication-controller');
const ideasController = require('../controllers/ideas');

router.route('/')
  .get(staticsController.home);

router.route('/login')
  .post(authentications.login);
router.route('/register')
  .post(authentications.register);

router.route('/users')
  .get(usersController.index);
router.route('/users/:id')
  .get(usersController.show)
  .put(usersController.update)
  .delete(usersController.delete);

router.route('/companies')
  .get(companiesController.index)
  .post(companiesController.create);
// router.route('/companies/new')
//   .get(companiesController.new);
router.route('/companies/:id')
  .get(companiesController.show)
  .put(companiesController.update)
  .delete(companiesController.delete);
//router.route('/companies/:id/edit')
//  .get(companiesController.edit);

router.route('/ideas')
  .get(ideasController.index)
  .post(ideasController.create);

router.route('/ideas/:id')
  .get(ideasController.show)
  .patch(ideasController.update)
  .put(ideasController.update)
  .delete(ideasController.delete);

module.exports = router;
