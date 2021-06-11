const connection = require('../database.js');

exports.getAllAuteursOfLivre = (numISBN) => {
    return new Promise((resolve, reject) => {
        const req = connection.query("SELECT nomAuteur FROM auteur JOIN auteurLivre ON auteurLivre.idAuteur = auteur.idAuteur  WHERE auteurlivre.numISBN = ? ", numISBN, (err, result) => {
            console.log(req.sql)
            err  ? reject(err) : resolve(result);
        });
    });
};