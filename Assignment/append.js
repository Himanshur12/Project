var fs = require('fs');
fs.appendFile('hello.txt', 'Hello Himanshu', function (err) {
  if (err) throw err;
  console.log('Saved!');
}); 