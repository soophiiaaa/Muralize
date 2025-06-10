const mysql = require('mysql2'); 

const connection = mysql.createConnection( {
    host: 'localhost', 
    user: 'root', 
<<<<<<< HEAD
    password: 'slbms20070511', 
=======
    password: '', 
>>>>>>> b0ab4a305d68255935965e44c22cdb70d63f22fc
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
