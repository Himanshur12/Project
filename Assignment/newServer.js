var http = require('http');
var fs=require('fs');

var server = http.createServer((request, response) => {

    var fileData = fs.readFileSync('./myJson.json');
    var myData = JSON.parse(fileData.toString());

    response.end("Server Workds");
if(request.method == 'POST') {
  response.on('data',function(data)
  {
    var IdData = JSON.parse(data.toString());
    myData.push(IdData);
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/json');
    response.write(myData);
    response.end("Push Success!");
  });
    
}
else if(request.method == 'GET') 
{
  if(myData.length>0) {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/json');
    response.write(myData);
    response.end("Success!");
  }
 } else
{
  response.statusCode = 404;
  response.setHeader('Content-Type','text/json');
  response.write("My Data Not Found");
  response.end('Failed!');
}
});
server.listen(4000,function() {
console.log("Server running on port : 4000");
});