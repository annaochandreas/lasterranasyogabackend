var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/booking', function(req, res, next) {
  res.json({"view": "booking"});
});

module.exports = router;