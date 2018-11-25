const fetch = require('node-fetch');

const fetchES6 = () => {
  fetch('http://jsonplaceholder.typicode.com/posts/1')
  .then(res => res.text())
  .then(body => console.log(body))
  .catch(e => console.error(e))
}

const fetchES7 = async() => {

  const userId = 1;
  const postData = `userId=${userId}`;
  try {
    
    let res = await fetch('http://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: postData
    });
    let body = await res.text();
    console.log(body)
    
  } catch (e) {
    console.error(e)
  }
};


fetchES6();
fetchES7();