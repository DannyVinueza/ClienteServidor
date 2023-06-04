const express = require('express');
const app = express();
const {engine} = require('express-handlebars');
const path = require('path')
app.use(express.json())

app.engine('.hbs', engine({
    extname: '.hbs'
}))

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname,'views'));

app.get('/', (req,res)=>{
    res.render('home')
})

app.get('/productos',(req, res)=>{
    res.sendFile('./coca-cola.jpeg',{
        root:__dirname
    });
})

app.get('/compra', (req,res)=>{
    res.json({
        "nombre": "Coca Cola",
        "categoria": "Gaseosa",
        "cantidad": "1L",
        "descripcion":{
            "sabor": "sprit",
            "azucar": "con azucar"
        } 
    })
})

app.listen(3000)
console.log("Servidor corriendo OK")