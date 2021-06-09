const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'poec_fil_rouge'
});

connection.connect((err) => {
    if (err) throw err;
    console.log("Connexion établie avec la base de données");
});

module.exports = connection;