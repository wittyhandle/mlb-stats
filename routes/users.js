var express = require('express'),
    router = express.Router(),
    User = require('../models').user,
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

module.exports = router;
