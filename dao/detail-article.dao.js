const detailArticle = require('../database.js');

exports.getOneArticleById = (refArticle) => {
    return new Promise((resolve, reject) => {
        const req = detailArticle.query("SELECT * FROM article where refArticle = ?",refArticle, (err, result) => {
            console.log(req.sql)
            err ? reject(err) : resolve(result);
        });
    });
};