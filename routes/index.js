var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/html5-tags', function(req, res, next) {
  res.render('html5-tags', { title: 'Express' });
});

router.get('/image-upload', function(req, res, next) {
  res.render('image-upload', { title: 'Express' });
});

module.exports = router;
