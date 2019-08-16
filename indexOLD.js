//Permitir que a aplicação rode sozinha: npm install nodemon -g

const express = require("express");//npm install express
const app = express();//const para não sobre escrever

app.get("/", function(req,res){ //Define uma rota
    res.sendFile(__dirname+"/html/index.html"); //__dirname pega o diretorio raiz da aplicação
});

app.get("/sobre", function(req,res){ //Define uma rota
    res.send("Minha pagina sobre."); //Send para enviar uma resposta
});

app.get("/ola/:nome/:cargo", function(req,res){ //Define uma rota
    res.send(req.params); //Recebe todos os dados de uma requisição
});

app.get("/ola2/:nome/:cargo", function(req,res){ //Define uma rota
    res.send("Ola "+req.params.nome+", seu carogo eh: "+req.params.cargo); //Recebe o parametro de uma requisição
});
app.listen(3000,function(){
    console.log("Servidor rodando na porta 3000.")
});//Sempre a ultima linha do codigo