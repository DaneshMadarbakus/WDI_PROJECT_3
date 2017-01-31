//Seed file

//require mongoose
const mongoose   = require('mongoose');
const async      = require('async');
const config     = require('../config/config');
const bluebird   = require('bluebird');

mongoose.Promise = bluebird;

//connect mongoose
mongoose.connect(config.db);

//require models
const User    = require('../models/user');
const Company = require('../models/company');
const Idea    = require('../models/idea');

//drop db
User.collection.drop();
Company.collection.drop();
Idea.collection.drop();

async.waterfall([
  createUsers,
  createCompanies,
  createIdeas
], function(err) {
  if (err) console.log(err);
  console.log('Seeding is complete');
  return process.exit();
});

function createUsers(done) {
  const users = [
    {
      username: 'kenster',
      email: 'kenny@kenny.com',
      password: 'password',
      passwordConfirmation: 'password',
      companies: []
    },
    {
      username: 'billsta',
      email: 'billy@billy.com',
      password: 'password',
      passwordConfirmation: 'password',
      companies: []
    },
    {
      username: 'jen teh jester',
      email: 'jenny@jenny.com',
      password: 'password',
      passwordConfirmation: 'password',
      companies: []
    },
    {
      username: 'shazzaaaster',
      email: 'sharron@sharron.com',
      password: 'password',
      passwordConfirmation: 'password',
      companies: []
    }
  ];

  bluebird.map(users, user => {
    return User.create(user);
  }).then(() => {
    done(null);
  });
}

function createIdeas(done) {
  Company.find((err, companies) => {
    if (err) return done(err);

    const ideas = [
      {
        idea: 'More coffee',
        company: companies[2]
      },
      {
        idea: 'More code',
        company: companies[1]
      },
      {
        idea: 'More badass',
        company: companies[0]
      }
    ];

    bluebird.map(ideas, idea => {
      return Idea.create(idea);
    }).then(() => {
      done(null);
    });
  });
}

function createCompanies(done) {
  User.find((err, users) => {
    if (err) return done(err);

    const companies = [
      {
        name: 'badass',
        description: 'this is a badass company',
        website: 'www.badass.com',
        owner: users[0],
        ideas: []
      },
      {
        name: 'general assembly',
        description: 'learn to code',
        website: 'www.generalassembly.com',
        owner: users[1],
        ideas: []
      },
      {
        name: 'costa',
        description: 'coffee and stuff',
        website: 'www.costa.com',
        owner: users[2],
        ideas: []
      }
    ];

    bluebird.map(companies, company => {
      return Company.create(company);
    }).then(() => {
      done(null);
    });
  });
}
