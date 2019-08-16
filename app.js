var http = require('http');//Importa http

http.createServer(function(req, res){
    res.end("Hello Word");
}).listen(3000);//Cria o servidor web

console.log("Servidor Rodando.");