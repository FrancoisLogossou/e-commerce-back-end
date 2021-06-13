const connection = require('../database.js');

exports.getArticlesBySearch = (param1) => {
    return new Promise((resolve, reject) => {
        const req = connection.query("SELECT * FROM article JOIN livre ON article.refArticle = livre.refArticle LEFT JOIN auteurLivre ON livre.numISBN = auteurLivre.numISBN LEFT JOIN auteur ON auteurLivre.idAuteur = auteur.idAuteur WHERE article.titreArticle like ? OR auteur.nomAuteur like ? ", ["%"+param1+"%","%"+param1+"%"],  (err, result) => {
            console.log(req.sql)
            err ? reject(err) : resolve(result);
        });
    });
};
