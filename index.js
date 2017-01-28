
const express     = require('express');
const morgan      = require('morgan');
const bodyParser  = require('body-parser');
const expressJWT  = require('express-jwt');
const mongoose    = require('mongoose');
const cors        = require('cors');
const app         = express();


const routes      = require('./config/routes');
const config      = require('./config/config');

mongoose.connect(config.db);

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

app.use('/', routes);

app.listen(config.port, console.log(`app is listening on ${config.port}`));
