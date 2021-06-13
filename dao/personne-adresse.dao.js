const connection = require('../database.js');

exports.getAllAdressesOfPersonne = (idPersonne) => {
    return new Promise((resolve, reject) => {
        const req = connection.query("SELECT a.id, rue, codePostal, ville FROM adresse a JOIN personne_adresse pa ON pa.id_adresse = a.id  WHERE num_personne = ? ", idPersonne, (err, result) => {
            console.log(req.sql)
            err  ? reject(err) : resolve(result);
        });
    });
};

exports.add = (idUser, idAdresse) => {
    return new Promise((resolve, reject) => {
        const req = connection.query("INSERT INTO adresseClient SET idUser = ?, idAdresse = ?", [idUser, idAdresse], (err, result) => {
            console.log(req.sql)
            err ? reject(err) : resolve(result);
        });
    });
};
