var express = require('express');
var router = express.Router();
var controlller = require('../controller/UrlController');

/* create new url */
router.post('/', function(req, res, next) {
  controlller.getGeneratedUrl(req,res);
});


/* GET new url */
router.get('/:token', function(req, res, next) {
  controlller.getUrl(req,res);
});


module.exports = router;