/* globals: api */
require('../spec_helper');

const User = require('../../models/user.js');

//The body of the test.
describe('Authentication tests', function() {

  this.timeout(5000);

  beforeEach(done => {
    User.collection.remove();
    done();
  });
});
