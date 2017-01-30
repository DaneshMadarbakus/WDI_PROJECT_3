const express = require('express');
const router = express.Router();

const staticsController = require('../controllers/statics');
const usersController = require('../controllers/users');

const authentications = require('../controllers/authentications');


router.route('/login')
  .post(authentications.login);

router.route('/')
  .get(staticsController.home);

router.route('/users')
  .get(usersController.index);
router.route('/users/:id')
  .get(usersController.show)
  .put(usersController.update)
  .delete(usersController.delete);

module.exports = router;
