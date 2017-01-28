const express     = require('express');
const morgan      = require('morgan');
const bodyParser  = require('body-parser');
const expressJWT  = require('express-jwt');
const mongoose    = require('mongoose');
const app         = express();



app.use(morgan('dev'));
app.listen(3000, ()=> console.log('Express has started'));
