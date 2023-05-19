const net = require('net');
const dns = require('dns');

function validateEmailMailbox(email) {
  const domain = email.split('@')[1];

  
  dns.resolveMx(domain, (err, addresses) => {
    if (err) {
      console.error('Error occurred while resolving MX records', err);
      return;
    }
    
    const socket = net.createConnection(25, addresses[0].exchange);
    
    socket.setEncoding('ascii');
    console.log("-----------------------------------")
    
    socket.on('data', (data) => {
      console.log({data})
      if (data.startsWith('220')) {
        // SMTP Server is ready, send HELO message
        socket.write(`HELO ${domain}\r\n`);
        console.log("AAAAAAAAA")
      } else if (data.startsWith('250')) {
        // Server responded to HELO, send MAIL FROM message
        socket.write(`MAIL FROM:<test@${domain}>\r\n`);
        console.log("BBBBBBBB")
      } else if (data.startsWith('503')) {
        // Server expects RCPT TO, send it
        socket.write(`RCPT TO:<${email}>\r\n`);
        console.log("CCCCCCCCC")
      } else {
        console.log('Server response:', data);
        socket.end();
      }
    });
  });
}

module.exports = validateEmailMailbox
