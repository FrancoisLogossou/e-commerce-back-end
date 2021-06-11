const commandeDao = require('../dao/commande.dao');

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