var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  console.log(req.user)
  res.render('index', { title: 'Home' });
});

module.exports = router;
