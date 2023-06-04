const http = require("http");
const { CLIENT_RENEG_LIMIT } = require("tls");
//Enviando etiquetas html
const server = http.createServer((req, res)=>{
    res.setHeader('Content-type', 'text/html');
    res.write("<h1 style='color: yellow'>Hello Danny</h1>");
    res.end();
})

server.listen(4040);
console.log("Servidor ejecutandose OK");