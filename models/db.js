const Sequelize = require('sequelize'); //Modulo para se conectar a u banco e dados

// Conexão com banco de dados MySql
const sequelize = new Sequelize('postapp','root','a11230029',{
    host: "localhost",
    dialect: 'mysql'
});//NomeBanco,Usuario,Senha,host,modeloBanco

module.exports = {
    Sequelize = Sequelize,
    sequelize = sequelize
}