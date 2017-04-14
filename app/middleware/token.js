var dispositivo = new (require('../models/dispositivo'))();
var jwt = require('jsonwebtoken');

module.exports = function() {

  var authenticate = function(req, res) {
    dispositivo.findOne(req.query).then(function(data) {
      if (!data[0]) {
        res.json({ success: false, message: 'Authentication failed. Device not found.' });
      }
      if (req.query.uuid !== data[0].uuid) {
        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
      }
      var token = jwt.sign(data[0], 'ilovescotchyscotch', {
        expiresInMinutes: 1440 // expires in 24 hours
      });
      res.json({
        success: true,
        message: 'Enjoy your token!',
        token: token
      });
    }).catch(function(err) {
      res.json({ success: false, message: err });
    });
  };
  return authenticate;
};
