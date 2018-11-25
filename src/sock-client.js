const net = require('net');

const msg = 'Hello';

const conn = net.createConnection({ host: 'localhost', port: 3000}, () => {

  // add listener 
  conn.on('end', () => {
    console.log('disconnected from server');
  });
  
  conn.on('data', (data) => {
    console.log('receive message', data.toString());
    conn.end();
  });

  
  console.log('success connect server');
  // send data
  console.log('send message', msg);
  conn.write(`${msg}\r\n`);

})
