var http = require('http');
var server = http.createServer(function(req ,res){
    console.log(req.url);
    res.end('Server Works!');
});
server.listen(4000,'localhost',function(){
    console.log('Sever started on port:4000');
});