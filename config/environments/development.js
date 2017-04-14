var nconf = require('nconf');
nconf.set('url', 'localhost');

nconf.set('database', {
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'testeo'
});
