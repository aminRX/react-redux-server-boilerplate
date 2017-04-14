const user = new (require('../models/user.js'))();

exports.index = function(req, res) {
  res.json(user.index());
};
