var http = require('http');
var fs = require('fs');
const local = 'localhost';
const port = 8000;
var u;
var m;
    var server = http.createServer ( function(request,response){
        u = request.url;
        console.log(u);
        m = request.method;
        console.log(m);
    response.writeHead(200,{"Content-Type":"text\plain"});
    if(request.method == "GET")
        {
            response.end("received GET request.")
            request.on('data', function(chunk) 
            {
                myid = chunk.toString();
                console.log(chunk.toString());
            });
        }
    else if(request.method == "POST")
        {
            response.end("received POST request.");
            request.on('data', function(chunk) 
            {
                myid = chunk.toString();
                console.log(chunk.toString());
            });
        }
    else
        {
            response.end("Undefined request .");
            request.on('data', function(chunk) 
            {
                console.log(chunk.toString());
            });
        }
    
        fs.appendFile('str.txt',u+" "+m, function (err) {
            if (err) throw err;
            console.log(u);
            console.log(m);
        }); 
});

server.listen(8000);
console.log("Server running on port 8000");