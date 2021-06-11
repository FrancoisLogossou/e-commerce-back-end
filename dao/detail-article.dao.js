const detailArticle = require('../database.js');

exports.getOneArticleById = (refArticle) => {
    return new Promise((resolve, reject) => {
        const req = detailArticle.query("SELECT article.refArticle, imageArticle, titreArticle, puht, qteStock, resumeArticle, livre.numISBN, livre.nomGenre, livre.nomEditeur FROM article LEFT JOIN livre ON article.refArticle = livre.refArticle LEFT JOIN genre ON livre.nomGenre = genre.nomGenre LEFT JOIN editeur ON livre.nomEditeur = editeur.nomEditeur LEFT JOIN auteurLivre ON livre.numISBN = auteurLivre.numISBN LEFT JOIN auteur ON auteurLivre.idAuteurLivre = auteur.idAuteur WHERE article.refArticle = ?",refArticle, (err, result) => {
            console.log(req.sql)
            err ? reject(err) : resolve(result);
        });
    });
};