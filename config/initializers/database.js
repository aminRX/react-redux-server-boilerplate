// config/initializers/database.js
var mysql = require('mysql');
var nconf = require('nconf');

var DataBase = function() {
};

module.exports = DataBase;

DataBase.GetDB = function() {
  if (typeof DataBase.db === 'undefined') {
    DataBase.initDB();
  }
  return DataBase.db;
};

DataBase.initDB = function() {
  DataBase.db = mysql.createConnection({
    host: nconf.get('database').host,
    user: nconf.get('database').user,
    password: nconf.get('database').password,
    database: nconf.get('database').database

  });
  DataBase.db.connect();
};
