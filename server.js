//definiendo variables

var http = require('http');

//creando el server
http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type' : 'text/html' });
    response.write('Server de aprendizaje version 0.1');
    response.end();
}).listen(8888);
