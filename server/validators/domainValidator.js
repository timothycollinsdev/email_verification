const dns = require('dns');

function validateEmailDomain(email) {
  const domain = email.split('@')[1];

  return new Promise((resolve, reject) => {
    dns.resolveMx(domain, (error, addresses) => {
      if (error) {
        if (error.code === 'ENOTFOUND') {
          resolve(false); // Domain does not exist
        } else {
          reject(error);
        }
      } else {
        resolve(true); // Domain exists
      }
    });
  });
}

module.exports = validateEmailDomain
