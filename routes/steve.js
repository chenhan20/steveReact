var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Steve', { title: 'Express' });
});

/* GET Demo01 page. */
router.get('/Demo01', function(req, res, next) {
  res.render('Demo/Demo01', { title: 'Demo01' });
});


module.exports = router;
