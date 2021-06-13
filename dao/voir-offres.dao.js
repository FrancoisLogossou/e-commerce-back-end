const connection = require('../database.js');

exports.getAllMeilleuresVentes = () => {
    return new Promise((resolve, reject) => {
        const req = connection.query("SELECT article.refArticle,titreArticle,resumeArticle,puht,imageArticle,qteStock,idTauxTVA,sum(ligneCommande.qteCommande) as total FROM article LEFT JOIN ligneCommande ON article.refArticle = ligneCommande.refArticle WHERE qteStock <> 0 GROUP BY ligneCommande.refArticle ORDER BY total DESC", (err, result) => {
            console.log(req.sql)
            err ? reject(err) : resolve(result);
        });
    });
};

exports.getAllNouveautes = () => {
    return new Promise((resolve, reject) => {
        const req = connection.query("SELECT * FROM article  WHERE qteStock <> 0 ORDER BY refArticle DESC", (err, result) => {
            console.log(req.sql)
            err ? reject(err) : resolve(result);
        });
    });
};

exports.getAllGenreFormation = () => {
    return new Promise((resolve, reject) => {
        const req = connection.query("SELECT * FROM article LEFT JOIN livre ON article.refArticle = livre.refArticle WHERE qteStock <> 0 AND livre.nomGenre = 'fantastique'", (err, result) => {
            console.log(req.sql)
            err ? reject(err) : resolve(result);
        });
    });
};