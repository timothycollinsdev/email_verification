var express = require('express');
var router = express.Router();

const validateEmailSyntax = require('./validators/syntaxValidator');
const validateEmailDomain = require('./validators/domainValidator');

router.post('/', function(req, res) {
  const email = req.body?.emails

  // syntax validation
  const syntaxValidation = validateEmailSyntax(email)
  if (!syntaxValidation) {
    res.send({
      validation: false,
      msg: "Email syntax is not valid"
    })
    return 
  }

  // domain validation
  validateEmailDomain(email)
  .then(domainExists => {
    if (!domainExists) {
      res.send({
        validation: false,
        msg: "Email domain is not valid"
      })
      return
    }
  })
  .catch(error => {
    console.error('An error occurred:', error);
    res.send({
      error: error
    })
    return
  });

});

module.exports = router;
