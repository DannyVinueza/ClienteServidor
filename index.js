const http = require("http");
const { CLIENT_RENEG_LIMIT } = require("tls");
//Enviando etiquetas html
// const server = http.createServer((req, res)=>{
//     res.setHeader('Content-type', 'text/html');
//     res.write("<h1 style='color: yellow'>Hello Danny</h1>");
//     res.end();
// })

// const server = http.createServer((req, res)=>{
//     usuario = {
//         user: "Danny Vinueza",
//         email: "danny.vinueza@epn.edu.ec"
//     }

//     res.setHeader('Content-Type', 'application/json');
//     res.write(JSON.stringify(usuario));
//     res.end();
// })

const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send("Hola Danny Vinueza utilizando express")
})

app.listen(4040);
console.log("Servidor ejecutandose OK");