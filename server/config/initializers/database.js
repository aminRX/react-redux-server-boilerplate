// config/initializers/database.js
const mysql = require('mysql');

class Database {
  static GetDB(env) {
    if (typeof Database.db === 'undefined') {
      Database.initDB(env);
    }
    return Database.db;
  }

  static initDB(env) {
    Database.db = mysql.createConnection({
      host: env.host,
      user: env.user,
      password: env.password,
      database: env.database

    });
    Database.db.connect();
  }
}

module.exports = Database;
