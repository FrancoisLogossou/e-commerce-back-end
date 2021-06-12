const { CommandeList } = require("../models/commande-list");
const commandeListDao = require('../dao/commande-list.dao');

exports.insertListCommande = (req, res, next) => {
    const a = new CommandeList(
        req.body.lignesCommande,
        req.body.idCommande,
    );
    console.log(req.body)
    console.log(a)
    commandeListDao.insertListCommande(a)
        .then(result => {
            return res.status(201).json(a);
        })
        .catch(err => {
            return res.status(500).json({
                error: `problème d'insertion : ${err}`
            });
        });
}