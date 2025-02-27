var express = require('express');
var router = express.Router();
var userData = require('../mock-data/user-data');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(userData);
});

/* GET user data. */
router.get('/:name', function(req, res, next) {
  var name = req.params.name
  // If parameter string, must use obj[xxx] instead of obj.xxx
  res.json(userData[name])
});

module.exports = router;
