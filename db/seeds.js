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
    },
    {
      username: 'Orestes',
      email: 'Orestes@Orestes.com',
      password: 'password',
      passwordConfirmation: 'password',
      companies: []
    },
    {
      username: 'Damocles',
      email: 'Damocles@Damocles.com',
      password: 'password',
      passwordConfirmation: 'password',
      companies: []
    },
    {
      username: 'Mikheil',
      email: 'Mikheil@Mikheil.com',
      password: 'password',
      passwordConfirmation: 'password',
      companies: []
    }, {
      username: 'Okeanos',
      email: 'Okeanos@Okeanos.com',
      password: 'password',
      passwordConfirmation: 'password',
      companies: []
    },
    {
      username: 'Tamaz',
      email: 'Tamaz@Tamaz.com',
      password: 'password',
      passwordConfirmation: 'password',
      companies: []
    },
    {
      username: 'Valeri',
      email: 'Valeri@Valeri.com',
      password: 'password',
      passwordConfirmation: 'password',
      companies: []
    },
    {
      username: 'Asklepios',
      email: 'Asklepios@Asklepios.com',
      password: 'password',
      passwordConfirmation: 'password',
      companies: []
    },
    {
      username: 'Oidipous',
      email: 'Oidipous@Oidipous.com',
      password: 'password',
      passwordConfirmation: 'password',
      companies: []
    },
    {
      username: 'Revazi',
      email: 'Revazi@Revazi.com',
      password: 'password',
      passwordConfirmation: 'password',
      companies: []
    },
    {  username: 'Damon',
      email: 'Damon@Damon.com',
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
        company: companies[2],
        randomUsername: 'sticky quail'
      },
      {
        idea: 'More code',
        company: companies[1],
        randomUsername: 'quiet owl'
      },
      {
        idea: 'Carrot cake bear claw cake donut icing tiramisu ice cream. Pudding icing dragée tootsie roll ice cream croissant tiramisu marzipan. Cotton candy gingerbread pastry biscuit dragée wafer jelly-o.',
        company: companies[0],
        randomUsername: 'magnificent crab'
      },
      {
        idea: 'Badass lighting Tiger Dragon Coders X',
        company: companies[2],
        randomUsername: 'unsightly badger'
      },
      {
        idea: 'Toffee cupcake sesame snaps jujubes croissant marshmallow carrot cake caramels icing. Candy pastry ice cream jelly beans bear claw candy canes apple pie cupcake chocolate bar. Cheesecake cookie topping muffin donut chupa chups cotton candy.',
        company: companies[1],
        randomUsername: 'fast cat'
      },
      {
        idea: 'Cake jelly-o candy liquorice marshmallow macaroon chocolate sugar plum biscuit. Pudding liquorice biscuit cotton candy gummies. Oat cake gingerbread tiramisu tootsie roll caramels sweet roll tootsie roll pastry jujubes.',
        company: companies[0],
        randomUsername: 'brave wolverine'
      },
      {
        idea: 'Wafer cake marzipan croissant liquorice. Pudding sweet chupa chups. Sesame snaps danish danish dragée. Fruitcake cookie chocolate bar icing cookie.',
        company: companies[2],
        randomUsername: 'thankful donkey'
      }
      {
        idea: 'Wafer cake marzipan croissant liquorice. Pudding sweet chupa chups. Sesame snaps danish danish dragée. Fruitcake cookie chocolate bar icing cookie.',
        company: companies[0],
        randomUsername: 'brief baboon'
      }
      {
        idea: 'Wafer cake marzipan croissant liquorice. Pudding sweet chupa chups. Sesame snaps danish danish dragée. Fruitcake cookie chocolate bar icing cookie.',
        company: companies[1],
        randomUsername: 'early badger'
      }
      {
        idea: 'Wafer cake marzipan croissant liquorice. Pudding sweet chupa chups. Sesame snaps danish danish dragée. Fruitcake cookie chocolate bar icing cookie.',
        company: companies[1],
        randomUsername: 'fast barracuda'
      }
      {
        idea: 'Wafer cake marzipan croissant liquorice. Pudding sweet chupa chups. Sesame snaps danish danish dragée. Fruitcake cookie chocolate bar icing cookie.',
        company: companies[2],
        randomUsername: 'late bat'
      }
      {
        idea: 'Wafer cake marzipan croissant liquorice. Pudding sweet chupa chups. Sesame snaps danish danish dragée. Fruitcake cookie chocolate bar icing cookie.',
        company: companies[0],
        randomUsername: 'long bear'
      }
      {
        idea: 'Wafer cake marzipan croissant liquorice. Pudding sweet chupa chups. Sesame snaps danish danish dragée. Fruitcake cookie chocolate bar icing cookie.',
        company: companies[1],
        randomUsername: 'modern beaver'
      }
      {
        idea: 'Wafer cake marzipan croissant liquorice. Pudding sweet chupa chups. Sesame snaps danish danish dragée. Fruitcake cookie chocolate bar icing cookie.',
        company: companies[2],
        randomUsername: 'old bee'
      }
      {
        idea: 'Wafer cake marzipan croissant liquorice. Pudding sweet chupa chups. Sesame snaps danish danish dragée. Fruitcake cookie chocolate bar icing cookie.',
        company: companies[0],
        randomUsername: 'quick bison'
      }
      {
        idea: 'Wafer cake marzipan croissant liquorice. Pudding sweet chupa chups. Sesame snaps danish danish dragée. Fruitcake cookie chocolate bar icing cookie.',
        company: companies[1],
        randomUsername: 'rapid guanaco'
      }
      {
        idea: 'Wafer cake marzipan croissant liquorice. Pudding sweet chupa chups. Sesame snaps danish danish dragée. Fruitcake cookie chocolate bar icing cookie.',
        company: companies[2],
        randomUsername: 'short guinea-fowl'
      }
      {
        idea: 'Wafer cake marzipan croissant liquorice. Pudding sweet chupa chups. Sesame snaps danish danish dragée. Fruitcake cookie chocolate bar icing cookie.',
        company: companies[0],
        randomUsername: 'victorious donkey'
      }
      {
        idea: 'Wafer cake marzipan croissant liquorice. Pudding sweet chupa chups. Sesame snaps danish danish dragée. Fruitcake cookie chocolate bar icing cookie.',
        company: companies[1],
        randomUsername: 'witty donkey'
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
        ideas: [],
        image: 'http://stevensegallery.com/g/200/300'
      },
      {
        name: 'general assembly',
        description: 'learn to code',
        website: 'www.generalassembly.com',
        owner: users[1],
        ideas: [],
        image: 'https://pbs.twimg.com/profile_images/813584000082214912/5U3iZVs-.jpg'
      },
      {
        name: 'costa',
        description: 'coffee and stuff',
        website: 'www.costa.com',
        owner: users[2],
        ideas: [],
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/42/CostaLogo.svg/1024px-CostaLogo.svg.png'
      }
    ];

    bluebird.map(companies, company => {
      return Company.create(company);
    }).then(() => {
      done(null);
    });
  });
}
