var express = require('express');
var router = express.Router();

/* GET products listing. */
router.get('/', function(req, res, next) {
  res.send('products page!');
});

router.get('/test', function(req, res, next) {
  res.send('test products routen');
});

module.exports = router;
