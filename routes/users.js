var express = require('express'),
    router = express.Router(),
    User = require('../models').user,
    bcrypt = require('bcryptjs'),
    _ = require('lodash');

/* GET users listing. */
router.get('/', function(req, res, next) {

  var allUsers = [];
  User.findAll({attributes: ['id', 'username', 'firstName', 'lastName']}).then(function(users) {

    _.forEach(users, function(userRec) {
      allUsers.push(userRec.dataValues);
    });

    res.json(allUsers);

  });

});

router.get('/exists/:username', function(req, res, next) {

  User.find({where: {username: req.params.username}}).then(function(user) {

    if (user) {
      res.json({found: true});
    } else {
      res.json({found: false});
    }

  });

});

router.post('/create', function(req, res, next) {

  console.log('the body', req.body);
  var password = bcrypt.hashSync(req.body.password1, 8);

  User
    .create({
      password: password,
      username: req.body.userName,
      firstName: req.body.firstName,
      lastName: req.body.lastName
    })
    .then(function (newUser) {
      res.send(201, newUser);
    })
    .catch(function(err) {
      console.log('here', err);
      res.send(500, err);
    });

});

module.exports = router;
