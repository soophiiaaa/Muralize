const mysql = require('mysql2'); 

const connection = mysql.createConnection( {
    host: 'localhost', 
    user: 'root', 
    password: '', 
    database: 'muralize' 
});

connection.connect(
    function(err) { 
        if (err) {
            console.error('Erro ao conectar ao banco de dados: ' + err.stack);
            return;
        }
        console.log('Conexão bem-sucedida com o ID: ' + connection.threadId);
    });

module.exports = connection;
