const connection = require('../database.js');

exports.getAll = () => {
    return new Promise((resolve, reject) => {
        const req = connection.query("SELECT * FROM article", (err, result) => {
            console.log(req.sql)
            err ? reject(err) : resolve(result);
        });
    });
};

exports.updateStock = (refArticle, newStock) => {
    return new Promise((resolve, reject) => {
        const req = connection.query("UPDATE article SET qteStock=? WHERE refArticle = ?", [newStock, refArticle], (err,   result) => {
            console.log(req.sql)
            err || result.affectedRows == 0 ? reject(err) : resolve(result);
        });
    });
};