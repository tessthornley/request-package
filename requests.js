var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')           
  .on('error', function (err) {                                   
    throw err; 
  })
  .on('response', function (response) {                           
    console.log('Response -------- ', response)
    console.log('Response Messages ------------ ', response.statusMessage);
    console.log('Status Type ---------- ', response.headers['content-type'])
    console.log('Download complete.');
  })
  .pipe(fs.createWriteStream('./future.jpg'));  

  console.log('Downloading image...');