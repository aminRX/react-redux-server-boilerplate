'use strict';
const validator = require('validator');
const util = require('util');

const validateProfile = function (req, res, next) {
  req.checkBody('profile.name').notEmpty();
  req.checkBody('profile.lastName').notEmpty();
  req.checkBody('profile.birthday').notEmpty().isDateTime();
  req.checkBody('profile.id').notEmpty().uuid(1);
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
  validateProfile: validateProfile
};
