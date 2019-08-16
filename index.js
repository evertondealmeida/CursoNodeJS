//Permitir que a aplicação rode template: npm install --save express-handlebars
//Permitir enviar via POST: npm install --save body-parser
const express = require("express");//npm install express
const app = express();//const para não sobre escrever
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');



//Config
    //Template Engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');
    //Body Parser
    app.use(bodyParser.urlencoded({extended:false}));
    app.use(bodyParser.json());
    

//rotas 
    app.get('/cad', function(req,res){
        res.render('formulario');
    });

    app.post('/add', function(req,res){
        res.send("Texto "+req.body.titulo+" Conteudo: "+req.body.conteudo);
    });

    app.listen(3000,function(){
        console.log("Servidor rodando na porta 3000.")
    });//Sempre a ultima linha do codigo