const connection = require('../database.js');

exports.getAllAdressesOfPersonne = (idPersonne) => {
    return new Promise((resolve, reject) => {
        const req = connection.query("SELECT a.id, rue, codePostal, ville FROM adresse a JOIN personne_adresse pa ON pa.id_adresse = a.id  WHERE num_personne = ? ", idPersonne, (err, result) => {
            console.log(req.sql)
            err  ? reject(err) : resolve(result);
        });
    });
};
exports.getOneAdresseOfPersonne = (idPersonne, idAdresse) => {
    return new Promise((resolve, reject) => {
        const req = connection.query("SELECT a.id, rue, codePostal, ville FROM adresse a JOIN personne_adresse pa ON pa.id_adresse = a.id  WHERE num_personne = ? AND id_adresse = ?", [idPersonne, idAdresse], (err, result) => {
            console.log(req.sql)
            err ? reject(err) : resolve(result);
        });
    });
};
exports.add = (idPersonne, idAdresse) => {
    return new Promise((resolve, reject) => {
        const req = connection.query("INSERT INTO personne_adresse SET num_personne = ?, id_adresse = ?", [idPersonne, idAdresse], (err, result) => {
            console.log(req.sql)
            err ? reject(err) : resolve(result);
        });
    });
};
exports.deleteByIdPersonne = (idPersonne) => {
    return new Promise((resolve, reject) => {
        const req = connection.query("DELETE FROM personne_adresse WHERE num_personne = ?", idPersonne, (err, result) => {
            console.log(req.sql)
            err  ? reject(err) : resolve(result);
        });
    });
};
exports.deleteByIdAdresse = (idAdresse) => {
    return new Promise((resolve, reject) => {
        const req = connection.query("DELETE FROM personne_adresse WHERE id_adresse = ?", idAdresse, (err, result) => {
            console.log(req.sql)
            err ? reject(err) : resolve(result);
        });
    });
};