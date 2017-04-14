'use strict';

const nconf = require('nconf');
const logger = require('winston');
const express = require('express');
const path = require('path');
const config = require('nconf');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const env = "development" || process.env.NODE_ENV;
const isDeveloping = env !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;

logger.info('[APP] Starting server initialization');

nconf.use('memory');
nconf.argv();
nconf.env();
require('dotenv').load();

require('./config/environments/' + env);
require('./config/initializers/database').initDB();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// static files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/static', express.static(path.join(__dirname, 'dist')));

// view engine pug
app.set('view engine', 'pug');

if (isDeveloping) {
  app.use(cors());
  app.use(morgan('common'));
  const compiler = webpack(webpackConfig);
  const middleware = webpackMiddleware(compiler, {
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
}

logger.info('[SERVER] Initializing routes');

// api routes
app.use('/api', require('./app/routes/index'));
// main page.
app.get('/', function(req, res) {
  res.render('index');
});

// Error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: (app.get('env') === 'development' ? err : {})
  });
  next(err);
});

const server = require('http').Server(app);
server.listen(port);

logger.info('[SERVER] Listening on port ' + port);
