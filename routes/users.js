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

module.exports = router;
