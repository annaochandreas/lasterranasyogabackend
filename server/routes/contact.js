var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/api/contact', function(req, res, next) {
  res.json({"view": "contact"});
});

module.exports = router;
