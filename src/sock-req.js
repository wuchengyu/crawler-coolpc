const net = require('net');

const msg = 
`GET /posts HTTP/1.1
Host: jsonplaceholder.typicode.com
Connection: keep-alive
User-Agent: Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8
Accept-Language: zh-TW,zh;q=0.9,en-US;q=0.8,en;q=0.7

`

const conn = net.createConnection({ host: 'jsonplaceholder.typicode.com', port: 80}, () => {

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
