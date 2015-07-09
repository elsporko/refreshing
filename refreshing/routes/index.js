var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Refreshing' });
});

/* POST home page. */
router.post('/', function(req, res, next) {
  res.render('index', { title: 'Refreshing' });
});

module.exports = router;
