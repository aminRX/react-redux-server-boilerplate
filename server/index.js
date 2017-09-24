const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('./logger');
const setup = require('./middlewares/frontendMiddleware');
const env = process.env.NODE_ENV || "development";
const port = process.env.PORT || 3000;

// execute mongoconfig
require('./mongo.js');

logger.start();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// view engine pug
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

// setup middleware frontendmiddleware
setup(app);

// api routes
logger.routes();
app.use('/api', require('./app/routes/index'));

// start the server
app.listen(port);
logger.port(port);

module.exports = app;
