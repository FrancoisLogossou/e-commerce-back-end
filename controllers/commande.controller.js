const commandeDao = require('../dao/commande.dao');
const { Commande } = require("../models/commande");

exports.updateStockArticle = (req, res, next) => {
    const refArticle = parseInt(req.params.refArticle);
    console.log(refArticle)
    const qteStock = parseInt(req.body.qteStock);
    console.log(refArticle)
    console.log(qteStock)
    commandeDao.updateStockArticle(refArticle, qteStock)
        .then(result => res.status(200).json(result[0]))
        .catch(err => {
            res.status(500).json({
                error: `problème : ${err}`
            });
        });
}


exports.insertCommande = (req, res, next) => {
    const a = new Commande(
        req.body.idUser
        
    );
    commandeDao.insertCommande(a)
        .then(result => {
            a.idCommande = result.insertId;
            return res.status(201).json(a);
        })
        .catch(err => {
            return res.status(500).json({
                error: `problème d'insertion : ${err}`
            });
        });
}