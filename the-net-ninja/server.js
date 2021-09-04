const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((request, response) => {
  // lodash
  const num = _.random(0, 20);
  console.log(num);

  const greet = _.once(() => {
    console.log('hello');
  })

  greet();
  greet();

  let path = './views/';

  switch(request.url) {
    case '/': 
      path += 'index.html';
      response.statusCode = 200;
      break;
    
    case '/about':
      path += 'about.html';
      response.statusCode = 200;
      break;

    case '/about-me':
      response.statusCode = 301;
      response.setHeader('Location', '/about');
      response.end();
      break;
    
    default: 
      path += '404.html';
      response.statusCode = 404;
      break;
  }

  fs.readFile(path, (error, data) => {
    if (error) {
      console.error(error);
    } else {
      response.setHeader('Content-Type', 'text/html');
      response.end(data);
    }
  });
});

server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000');
});