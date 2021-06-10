const connection = require('../database.js');

exports.getArticlesBySearch = (param) => {
    return new Promise((resolve, reject) => {
        const req = connection.query("SELECT * FROM article WHERE titreArticle like ?", "%"+param+"%", (err, result) => {
            console.log(req.sql)
            err ? reject(err) : resolve(result);
        });
    });
};