var express = require('express');
var router = express.Router();

router.post('/', function(req, res){
  console.log(req.body)
  res.send("Hello world!");
});

module.exports = router;
