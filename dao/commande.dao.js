const connection = require('../database.js');


exports.updateStockArticle = (refArticle, qteStock) => {
    return new Promise((resolve, reject) => {
        const req = connection.query("UPDATE article SET qteStock=? WHERE refArticle = ?", [qteStock, refArticle], (err,   result) => {
            console.log(req.sql)
            err || result.affectedRows == 0 ? reject(err) : resolve(result);
        });
    });
};

exports.insertCommande = (commande) => {
    return new Promise((resolve, reject) => {
        const req = connection.query("INSERT INTO commande SET idUser = ?, dateCommande = SYSDATE()", [commande.idUser], (err, result) => {
            console.log(req.sql)
            err ? reject(err) : resolve(result);
        });
    });
};
