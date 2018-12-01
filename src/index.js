const fetch = require('node-fetch');
const fs = require('fs')
const { JSDOM } = require('jsdom');
const iconv = require('iconv-lite'); 

const url = 'http://www.coolpc.com.tw/evaluate.php';

fetch(url)
.then(res => res.buffer())
.then(buf => iconv.decode(buf, 'BIG5')) // convert encoding from big5 to utf8
.then(async(body) => {
  // parse html string to dom 
  const { document } = new JSDOM(body).window;

  const cols = document.querySelectorAll('#Tfix #tbdy tr[bgcolor="efefe0"]');

  cols.forEach((col, cind) => {
    
    const rows = col.querySelectorAll('td')
    const title = rows[1].textContent;
    const its = rows[2].querySelectorAll('option')
    const items = [...its].filter(it => !it.disabled)

    console.log('Topic', title)
    items.forEach(async(item, i) => {
      if(i != 0){
        const detail = item.text;
        console.log(i, detail)
      }
    })
    console.log()

  });
})
.catch(e => console.error(e))