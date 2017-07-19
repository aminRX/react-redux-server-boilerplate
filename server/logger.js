const chalk = require('chalk');

module.exports = {
  start() {
    console.log(chalk.blue('[APP] Starting server initialization'));
  },

  routes() {
    console.log(chalk.blue('[SERVER] Initializing routes'));
  },

  port(serverPort) {
    console.log(chalk.blue('[SERVER] Listening on port ' + serverPort));
  }
};
