const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const path = require('path');


require('./env');

const superHerosRouter = require('./routes/api/superHeros');
const superHerosIdRouter = require('./routes/api/superHeroById');
const routerMail = require('./routes/api/mail');

const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', superHerosRouter);
app.use('/api', superHerosIdRouter);
app.use('/send', routerMail);

app.listen(process.env.PORT || 5000);
