var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Refreshing' });
});

router.use(bodyParser.urlencoded({extended: true }));

/* POST home page. */
router.post('/goalName/:goalName/goalDate/:goalDate/goalAmount/:goalAmount', function (req, res, next) {
  console.log('~~~ specific params ~~~');
  console.log('Goal Name => ' + goalName);
});

router.post('/', function(req, res, next) {
  var goalName = req.body.goalName;

  console.log('~~~ catchall ~~~');
  console.log(req.body);
  console.log('Goal Name => ' + goalName);
/*
  console.log('params => ' + JSON.stringify(req.params));
*/
  res.render('index', { title: 'Refreshing' });
  next;
});

module.exports = router;
