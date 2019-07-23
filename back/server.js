const express = require('express');
const bodyParser = require('body-parser');
require('./env');

const superHerosRouter = require('./routes/api/superHeros');
const superHerosIdRouter = require('./routes/api/superHeroById');
const routerMail = require('./routes/api/mail');

const app = express();
app.use(bodyParser.json());

app.use('/api', superHerosRouter);
app.use('/api', superHerosIdRouter);
app.use('/send', routerMail);

app.listen(process.env.PORT || 5000);
