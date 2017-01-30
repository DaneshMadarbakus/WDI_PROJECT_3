const express = require('express');
const router = express.Router();

const ideasController = require('../controllers/ideas');

router.route('/ideas')
  .get(ideasController.index)
  .post(ideasController.create);

router.route('/ideas/:id')
  .get(ideasController.show)
  .patch(ideasController.update)
  .put(ideasController.update)
  .delete(ideasController.delete);

module.exports = router;
