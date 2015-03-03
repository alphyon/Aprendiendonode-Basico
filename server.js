//definiendo variables

var http = require('http');

//creando el server -- convirtiendo en modulo
function iniciar(){
  function onRequest(request,response){
    console.log('Petición Recibida');
    response.writeHead(200,{'Content-Type' : 'text/html' });
    response.write('Server de aprendizaje version 0.1');
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log('Servidor Iniciado');
}

exports.iniciar = iniciar;
