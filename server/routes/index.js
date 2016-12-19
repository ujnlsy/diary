var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: '你的日记', name: '你的日记首页'});

});



module.exports = router;
