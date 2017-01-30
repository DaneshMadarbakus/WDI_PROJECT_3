<<<<<<< HEAD
//specify the node command to run the tests.
process.env.NODE_ENV = 'test';

const chai      = require('chai');
global.should	  = chai.should();
global.expect  	= chai.expect;

=======
process.env.NODE_ENV = 'test';

//require th chai testing library
const chai = require('chai');
//Assigns 'should' and  'expect' to the chai should and expect methods
global.should = chai.should();
global.expect = chai.expect;

//creates the app for supertest
>>>>>>> test
const supertest = require('supertest');
const app       = require('../index');
global.api      = supertest(app);
