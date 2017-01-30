process.env.NODE_ENV = 'test';

//require th chai testing library
const chai = require('chai');
//Assigns 'should' and  'expect' to the chai should and expect methods
global.should = chai.should();
global.expect = chai.expect;

//creates the app for supertest
const supertest = require('supertest');
const app       = require('../index');
global.api      = supertest(app);
