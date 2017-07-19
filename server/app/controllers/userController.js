const User = require('./../models/user');

exports.index = function (req, res) {
  User.find({}, 'email', (err, users) => {
    res.json(users);
  });
};

exports.show = function (req, res) {
  const id = req.params.id;
  User.findById(id, 'email', (err, user) => {
    if(user) {
      res.json(user);
    } else {
      res.status(204).json({});
    }
  });
};

exports.create = function (req, res) {
  const { email, password } = req.body;
  const user = new User({
    email: email,
    password: password
  });

  user.save((err) => {
    if (!err) {
      res.status(201).json({
        success: true,
        message: 'User created.'
      });
    } else {
      res.status(422).json({
        success: false,
        message: 'User alreary exist.'
      });
    }
  });
};
