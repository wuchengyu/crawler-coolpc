const http = require('http');

const userId = 1;
const postData = `userId=${userId}`;

const options = {
  hostname: 'jsonplaceholder.typicode.com',
  port: 80,
  path: '/posts',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': Buffer.byteLength(postData)
  }
};

const req = http.request(options, (res) => {
  // add listener
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    console.log(`BODY:\n${chunk}`);
  });
  res.on('end', () => {
    console.log('No more data in response.');
  });

  console.log(`STATUS: ${res.statusCode}`);
  console.log(`HEADERS: ${JSON.stringify(res.headers)}`);

});

req.on('error', (e) => {
  console.error(`problem with request: ${e.message}`);
});

// write data to request body
req.write(postData);
req.end();