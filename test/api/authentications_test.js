/* globals: api */
require('../spec_helper');

const User = require('../../models/user');

//The body of the test.
describe('Authentication tests', function() {
  console.log('auth test');
  //5 second timeout
  this.timeout(5000);

  //dump the test database before running tests.
  beforeEach(done => {
    User.collection.remove();
    done();
  });

  describe('POST valid details to /api/register ', () =>  {
    it(' should return a valid jwt token', done => {
      api.post('/api/register')
      .set('Accept', 'application/json')
      .send(
        {
          email: 'testuser@testuser.com',
          password: 'password',
          passwordConfirmation: 'password'
        }

      ).end((err, res) => {
        console.log(res.body);
        expect(res.body.token).to.be.a('string');
        done();
      });
    });
  });

  describe('POST invalid details to /api/register', () => {
    it(' should something went wrong with authenticating a new user', done => {
      api.post('/api/register')
      .set('Accept', 'application/json')
      .send({
        email: 'test@test.com',
        password: 'password'
      }).expect(400, done);
    });
  });


});
