const connection = require('../database.js');

exports.getArticlesBySearch = (param1) => {
    return new Promise((resolve, reject) => {
        const req = connection.query("SELECT *,auteur.nomAuteur FROM article JOIN livre on article.refArticle = livre.refArticle LEFT JOIN auteurLivre on livre.numISBN = auteurLivre.numISBN LEFT JOIN auteur on auteurLivre.idAuteur = auteur.idAuteur WHERE article.titreArticle like ? OR auteur.nomAuteur like ? ", ["%"+param1+"%","%"+param1+"%"],  (err, result) => {
            console.log(req.sql)
            err ? reject(err) : resolve(result);
        });
    });
};
/*

SELECT article.refArticle, imageArticle, titreArticle, puht, resumeArticle, livre.nomEditeur,nomAuteur FROM article LEFT JOIN livre ON article.refArticle = livre.refArticle LEFT JOIN auteurLivre ON livre.numISBN = auteurLivre.numISBN LEFT JOIN auteur ON auteurLivre.idAuteurLivre = auteur.idAuteur WHERE article.titreArticle like ? OR auteur.nomAuteur like ?
"SELECT * FROM article JOIN livre on article.refArticle = livre.refArticle LEFT JOIN auteurLivre on livre.numISBN = auteurLivre.numISBN LEFT JOIN auteur on auteurLivre.idAuteur = auteur.idAuteur WHERE article.titreArticle like ? OR auteur.nomAuteur like ? "
SELECT 
    article.refArticle, 
    imageArticle, 
    titreArticle, 
    puht,  
    resumeArticle, 
    livre.nomEditeur
    nomAuteur 
FROM article 
    LEFT JOIN livre ON article.refArticle = livre.refArticle  
    LEFT JOIN auteurLivre ON livre.numISBN = auteurLivre.numISBN 
    LEFT JOIN auteur ON auteurLivre.idAuteurLivre = auteur.idAuteur 
    WHERE article.titreArticle like '%ha%' OR auteur.nomAuteur like '%ha%'
*/
/*
INSERT INTO livre (   
    numISBN,
    titreLivre,
    refArticle,
    nomEditeur,
    nomGenre) 
VALUES 
('978-2070584629', 'Harry Potter et Achref', 6, 'edition Pantheon', 'fantastique' );
INSERT INTO auteurLivre (    
    numISBN,
    idAuteur) 
VALUES 
('978-2070584629',1);

*/