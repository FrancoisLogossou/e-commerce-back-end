const connection = require('../database.js');

exports.getMeilleuresVentes = () => {
    return new Promise((resolve, reject) => {
        const req = connection.query("SELECT article.refArticle,titreArticle,resumeArticle,puht,imageArticle,qteStock,idTauxTVA,sum(ligneCommande.qteCommande) as total FROM article LEFT JOIN ligneCommande ON article.refArticle = ligneCommande.refArticle WHERE qteStock <> 0 GROUP BY ligneCommande.refArticle ORDER BY total DESC LIMIT 5 ", (err, result) => {
            console.log(req.sql)
            err ? reject(err) : resolve(result);
        });
    });
};

