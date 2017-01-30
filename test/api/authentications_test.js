/* globals: api */
require('../spec_helper');

const User = require('../../models/user.js');

//The body of the test.
describe('Authentication tests', function() {

  
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


      it(' should return a valid jwt token', (done) => {
        api.post('/api/register')
        .set('Accept', 'application/json')
        .send(
          {
            email: 'testuser@testuser.com',
            password: 'password',
            passwordConfirmation: 'password'
          }
        ).end((err, res) => {
          console.log('BLAAARGHHHH', res.body);
          expect(res.body.token).to.be.a('string');
          done();
        });
      });


      describe('POST invalid details to /api/register', () => {
        it(' should return a 400 status', (done) => {
          api.post('/api/register')
          .set('Accept', 'application/json')
          .send({
            email: 'testuser@testuser.com',
            password: 'password'
          }).expect(400, done);
        });
      });

      describe(' POST valid credentials to /api/login', () => {
        it('should return a valid jwt token', (done) => {
          const user = new User({
            email: 'testuser@testuser.com',
            password: 'password',
            passwordConfirmation: 'password'
          });

          user.save((err, user) => {
            if (err) console.log(err);
            if (user) console.log(user);
            api.post('/api/login')
            .set('Accept', 'application/json')
            .send({
              email: 'testuser@testuser.com',
              password: 'password'

            }).end((err, res) => {
              expect(res.body.token).to.be.a('string');
              done();
            });
          });
        });
      });
    });
    it('should return a response of 401 on incorrect password', (done) => {
      const user = new User({
        email: 'testuser@testuser.com',
        password: 'password',
        passwordConfirmation: 'password'
      });
      user.save((err, user) => {
        if (err) console.log(err);
        if (user) console.log(user);
        api.post('/api/login')
        .set('Accept', 'application/json')
        .send({
          email: 'testuser@testuser.com',
          password: 'pass'
        }).expect(401, done);
      });
    });
  });
});
