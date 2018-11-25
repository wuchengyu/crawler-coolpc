const fs = require('fs');
const { JSDOM } = require('jsdom');

fs.readFile('dom.html', {encoding: 'utf8'}, (err, data) => {
  if (err)
    console.error(err)

  // you can do something with dom like browser development tool
  const dom = new JSDOM(data);
  const { document } = dom.window;
  // get elements
  let col1 = document.getElementsByClassName('col1');

  // select element with css selector 
  // querySelectorAll will return a list of elements
  // querySelector will return an element
  let links = document.querySelectorAll('a'); // get elements by tag name
  let rows = document.querySelectorAll('.row'); // get elements by tag id
  let title = document.querySelector('#title'); // get element by tag id

  // get element attributes
  links.forEach(link => console.log(link.href))
  rows.forEach(row => console.log(row.innerHTML))

  console.log(title.text)
})