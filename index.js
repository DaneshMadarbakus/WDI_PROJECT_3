const express     = require('express');
const morgan      = require('morgan');
const bodyParser  = require('body-parser');
const expressJWT  = require('express-jwt');
const mongoose    = require('mongoose');
const cors        = require('cors');
const app         = express();
const dest        = `${__dirname}/public`;

const routes      = require('./config/routes');
const config      = require('./config/config');

mongoose.connect(config.db);

//testing
const environment = app.get('env');
if ('test' !== environment) {
  app.use(require('morgan')('dev'));
}

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(`${__dirname}/public`));
app.use('/api', expressJWT({ secret: config.secret })
  .unless({
    path: [
      { url: '/api/register', methods: ['POST']},
      { url: '/api/login', methods: ['POST']}
    ]
  }));
app.use(jwtErrorHandler);

function jwtErrorHandler(err, req, res, next){
  if (err.name !== 'UnauthorizedError') return next();
  return res.status(401).json({ message: 'UnauthorizedRequest.' });
}

app.use('/api', routes);
app.get('/*', (req, res) => res.sendFile(`${dest}/index.html`));

app.listen(config.port, console.log(`app is listening on ${config.port}`));

module.exports = app;
