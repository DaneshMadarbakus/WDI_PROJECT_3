const express         = require('express');
const router          = express.Router();
const statics         = require('../controllers/statics');
const users           = require('../controllers/users');
const companies       = require('../controllers/companies');
const authentications = require('../controllers/authentications');
const ideas           = require('../controllers/ideas');

/*
 * UNPROTECTED ROUTES
 */

router.route('/')
  .get(statics.home);
router.route('/login')
  .post(authentications.login);
router.route('/register')
  .post(authentications.register);

/*
 * PROTECTED ROUTES
 */

router.route('/users')
  .get(users.index);
router.route('/users/:id')
  .get(users.show)
  .put(users.update)
  .delete(users.delete);
router.route('/companies')
  .get(companies.index)
  .post(authentications.assign, companies.create);
router.route('/companies/:id')
  .get(companies.show)
  .put(companies.update)
  .delete(companies.delete);
router.route('/companies/:id/ideas')
  .post(authentications.assign, ideas.create);
router.route('/companies/:company_id/ideas/:id')
  .get(ideas.show)
  .put(ideas.update)
  .delete(ideas.delete);
router.route('/companies/:company_id/ideas/:id/upvote')
  .put(ideas.upvote);
router.route('/companies/:company_id/ideas/:id/downvote')
  .put(ideas.downvote);


module.exports = router;
