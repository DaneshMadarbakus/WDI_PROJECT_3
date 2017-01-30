const express = require('express');
const router = express.Router();

const staticsController = require('../controllers/statics');
const usersController = require('../controllers/users');

router.route('/')
  .get(staticsController.home);

router.route('/users')
  .get(usersController.index);
router.route('/users/:id')
  .get(usersController.show)
  .put(usersController.update)
  .delete(usersController.delete);

module.exports = router;
