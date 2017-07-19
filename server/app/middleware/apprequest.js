'use strict';

const validator = require('validator');
const util = require('util');

const validateCreate = function (req, res, next) {
  next();
  const errors = req.validationErrors();
  if (errors) {
    res.status(400).json('There have been validation errors: ' + util.inspect(errors));
    return;
  } else {

  }
};

function response400(res, message) {
  res.status(400).json({
    message: message
  });
}

module.exports = {
  validateCreate: validateCreate
};
