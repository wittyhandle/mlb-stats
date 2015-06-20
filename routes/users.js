var express = require('express'),
    router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({ id: 3, username: 'Fred' });
});

module.exports = router;
