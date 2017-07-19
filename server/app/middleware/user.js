'use strict';
const validator = require('validator');
var util = require('util');

var validateUser = function (req, res, next) {
  console.log(req.body);
  req.checkBody('user.email').notEmpty().isEmail();
  req.checkBody('user.phone').notEmpty().isInt().isLength({min: 5});
  req.checkBody('user.password').notEmpty();

  var errors = req.validationErrors();
  if (errors) {
    res.status(400).json('There have been validation errors: ' + util.inspect(errors));
    return;
  } else {
    next();
  }
};

function response400(res, message) {
  res.status(400).json({
    message: message
  });
}

module.exports = {
  validateUser: validateUser
};
