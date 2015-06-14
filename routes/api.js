var User = require('../models').user;
var express = require('express');
var authorization = require('auth-header');
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

        var token = jwt.sign({userId: user.id, username: user.username}, config.jwt_secret, {expiresInMinutes: 60});
        res.json({success: true, message: 'authentication successful', token: token});

      } else {
        return res.status(401).send({
          success: false,
          message: 'Authentication failed. Invalid password.'
        });
      }

    } else {
      return res.status(401).send({
        success: false,
        message: 'Authentication failed. No user found.'
      });
    }

  });

});


/**
 * authenticate and check token
 */
router.use(function(req, res, next) {

  var auth = authorization.parse(req.get('authorization'));
  if (auth && auth.values.length > 0) {

    var token = auth.values[0].token;
    jwt.verify(token, config.jwt_secret, function(err, decoded) {
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });
      } else {
        req.decoded = decoded;
        next();
      }
    });

  } else {

    return res.status(401).send({
      success: false,
      message: 'No token provided.'
    });

  }

});

router.get('/projects', function(req, res, next) {
  res.json({ title: 'aaaa' });
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
