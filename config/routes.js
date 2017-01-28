const express = require('express');
const router = express.Router();

const staticsController = require('../controllers/statics');
const usersController = require('../controllers/users');

router.route('/')
  .get(staticsController.home);



module.exports = router;
