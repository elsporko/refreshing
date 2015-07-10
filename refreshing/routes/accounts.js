var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('accounts', { title: 'Refreshing' });
});

/* POST home page. */
router.post('/', function(req, res, next) {
  res.render('accounts', { title: 'Refreshing' });
});

module.exports = router;
