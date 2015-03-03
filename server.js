//definiendo variables

var http = require('http');

//creando el server -- refactorizamos
function onRequest(request,response){
  response.writeHead(200,{'Content-Type' : 'text/html' });
  response.write('Server de aprendizaje version 0.1');
  response.end();
}

http.createServer(onRequest).listen(8888);
