require('../spec_helper');

//require relevant users

const Company = require('../../models/company');
const User = require('../../models/user');

describe('Company tests', () => {
  //drop them dbs
  beforeEach(done => {
    Company.collection.remove();
    done();
  });

  beforeEach(done => {
    User.collection.remove();
    done();
  });
  describe('GET /api/companies', () => {
    beforeEach((done) => {
      const company = new Company({
        name: 'company',
        description: 'import/export'
      });
      company.save((err) => {
        console.log('ping');
        if (err) console.log(err);
        done();
      });
    });
    it('should return a 200 status code', (done) => {
      api.get('/api/companies')
      .set('Accept', 'application/json')
      .expect(200, done);
    });
    it('should respond with a JSON object', (done) => {
      api.get('/api/companies')
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.header['content-type']).to.be.eq(`application/json;
          charset=utf-8`);
        done();
      });
    });
  });
});
