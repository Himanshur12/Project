var http = require('http');
var fs=require('fs');
const local = '';
const port = 3000;

const server = http.createServer((request, response) => {

  if(request.method == 'POST') {
    request.on('data', (chunk) => {
    console.log(chunk.toString());
    fs.appendFile('mystr.txt',request.url+" "+request.method+" "+chunk.toString(), function (err) 
    {        
       if (err) throw err;
    });
    });
}
  response.end('Success !');
});

server.listen(port, local, () => {
console.log(`Server running at http://${local}:${port}/`);
});
