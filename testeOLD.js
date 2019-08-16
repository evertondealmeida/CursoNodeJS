//Para abrir o sql no termninal: mysql -h localhost -u root -p

const Sequelize = require('sequelize'); //Modulo para se conectar a u banco e dados
const sequelize = new Sequelize('teste','root','a11230029',{
    host: "localhost",
    dialect: 'mysql'
});//NomeBanco,Usuario,Senha,host,modeloBanco

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso");
}).catch(function(erro){
    console.log("Falha ao se conectar: "+erro);
});//Confere se o banco t funcionando


const Postagem = sequelize.define('postagens',{
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type:Sequelize.TEXT
    }
});

//Insert
//Postagem.create({
//   titulo: "Um titulo qualquer",
//    conteudo: "Qualquer conted"
//}); 
const Usuario = sequelize.define('usuarios',{
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
});
//Insert
//Usuario.create({
//    nome: "Everton",
//   sobrenome: "Almeida",
//   idade: "26",
//   email: "everton@gmail.com"
//});
//Força a geração da tabela
//Postagem.sync({force:true}) 
//Usuario.sync({force:true})

