const express = require('express');
const bodyParser = require('body-parser');
require('./env');

const superHerosRouter = require('./routes/api/superHeros');
const superHerosIdRouter = require('./routes/api/superHeroById');

const app = express();
app.use(bodyParser.json());

app.use('/api', superHerosRouter);
app.use('/api', superHerosIdRouter)

app.listen(process.env.PORT || 5000);
