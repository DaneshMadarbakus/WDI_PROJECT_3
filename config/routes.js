const express = require('express');
const router = express.Router();

const staticsController = require('../controllers/statics');

router.route('/')
  .get(staticsController.home);



module.exports = router;
