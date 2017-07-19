
var dispositivo = new (require('../models/dispositivo'))();
var jwt = require('jsonwebtoken');

exports.validateToken = function(req, res, next) {

  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers.authorization;
  // decode token
  if (token) {

    // verifies secret and checks exp

    jwt.verify(token, 'PecoIsGay', function(err, decoded) {

      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });
      } else {
        // if everything is good, save to request for use in other routes

        console.log(decoded);
        req.decoded = decoded;
        next();
      }
    });

  } else {

    // if there is no token
    // return an error
    return res.status(403).send({
        success: false,
        message: 'No token provided.'
    });

  }
};


exports.authenticate = function(req, res) {
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
