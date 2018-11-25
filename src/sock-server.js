const net = require('net');

const port = 3000;

const server = net.createServer((c) => {

  // 'connection' listener
  console.log('client connected');
  c.on('end', () => {
    console.log('client disconnected');
  });

  c.on('data', data => {
    console.log('receive message', data);
    c.write(data);
  });
  c.pipe(c);
});

server.on('error', (err) => {
  throw err;
});

server.listen(port, () => {
  console.log(`start server @ port:${port}`);
});