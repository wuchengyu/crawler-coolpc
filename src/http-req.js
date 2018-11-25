const http = require('http');

const req = http.request('http://jsonplaceholder.typicode.com/posts', (res) => {
  
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

req.end();
