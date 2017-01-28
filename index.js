const express     = require('express');
const morgan      = require('morgan');
const bodyParser  = require('body-parser');
const expressJWT  = require('express-jwt');
const mongoose    = require('mongoose');
const app         = express();


app.get('/*', (req, res) => res.sendFile(`src/index.html`));

app.use(morgan('dev'));
app.listen(3000, ()=> console.log('Express has started'));
