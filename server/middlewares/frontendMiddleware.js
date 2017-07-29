const addDevMiddlewares = (app, webpackConfig) => {
  const webpack = require('webpack');
  const compiler = webpack(webpackConfig);

  app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
  }));

  app.use(require("webpack-hot-middleware")(compiler, {
    log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
  }));

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
};

const addProdMiddlewares = (app, options) => {
  // do something to production
};

module.exports = (app, options) => {
  const isProd = process.env.NODE_ENV === 'production';

  if (isProd) {
    addProdMiddlewares(app, options);
  } else {
    console.log('---');
    const webpackConfig = require('./../webpack.config.js');
    addDevMiddlewares(app, webpackConfig);
  }
};
