const connection = require('../database.js');

exports.insertListCommande = (commandeList) => {
    return new Promise((resolve, reject) => {
        const baseQuery = "INSERT INTO ligneCommande (qteCommande, refArticle, idCommande) values ?"; 
        const commandeListTab = commandeList.lignesCommande.map(commande => [commande.qteArticle, commande.article.refArticle, commandeList.idCommande])
        const req = connection.query(baseQuery, [commandeListTab], (err, result) => {
            console.log(req.sql)
            err ? reject(err) : resolve(result);
        });
    });
};