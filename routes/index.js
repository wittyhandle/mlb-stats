var express = require('express');
var router = express.Router();

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
