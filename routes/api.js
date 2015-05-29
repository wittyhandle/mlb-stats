var User = require('../models').user;
var express = require('express');
var router = express.Router();
var jwt    = require('jsonwebtoken');
var config = require('../common').config();
var bcrypt = require('bcryptjs');

/**
 * Takes the credentials, validates them and returns a
 * jwt if legit.
 */
router.post('/authenticate', function(req, res) {

  var password = req.body.password;
  User.findOne({where: {username: req.body.username}}).then(function(user) {

    if (user) {

      if (bcrypt.compareSync(password, user.password)) {

        console.log("Authentication successful");
        var token = jwt.sign(user, config.jwt_secret, {
          expiresInMinutes: 1440 // expires in 24 hours
        });

        res.json({success: true, message: 'authentication successful', token: token});

      } else {
        console.log("Password does not match");
        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
      }

    } else {
      res.json({ success: false, message: 'Authentication failed. User not found.' });
    }

  });

});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Monkey' });
});

router.get('/secret', loggedIn, function(req, res) {
  res.send({secret: 'shhh!'});
});

router.get('/signin', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ name: 'mike' }));
});

function loggedIn(req, res, next) {
    if (req.user) {
        next();
    } else {
        res.status(401).send('Unauthorized');
    }
}

module.exports = router;
