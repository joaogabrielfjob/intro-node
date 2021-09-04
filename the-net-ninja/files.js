const fs = require('fs');

// reading files
fs.readFile('./docs/blog1.txt', (error, data) => {
  if (error) {
    console.error(error);
  }

  console.log(data.toString());
}); // it's async but doesn't block the thread

// writings files
fs.writeFile('./docs/blog1.txt', 'hello, world!', () => {
  console.log('file was written');
});

// directories
if (!fs.existsSync('./assets')) { // it's async and blocks the thread
  fs.mkdir('./assets', (error) => {
    if (error) {
      console.error(error);
    }
  
    console.log('folder created');
  });
} else {
  fs.rmdir('./assets', (error) => {
    console.error(error);
  });

  console.log('folder deleted');
}

// deleting files
if (fs.existsSync('./docs/deleteme.txt')) { // it's async and blocks the thread
  fs.unlink('./docs/deleteme.txt', (error) => {
    if (error) {
      console.error(error);
    }

    console.log('file deleted');
  });
}