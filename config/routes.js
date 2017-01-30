const express = require('express');
const router = express.Router();

const staticsController = require('../controllers/statics');
const usersController = require('../controllers/users');
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

router.route('/ideas')
  .get(ideasController.index)
  .post(ideasController.create);

router.route('/ideas/:id')
  .get(ideasController.show)
  .patch(ideasController.update)
  .put(ideasController.update)
  .delete(ideasController.delete);

module.exports = router;
