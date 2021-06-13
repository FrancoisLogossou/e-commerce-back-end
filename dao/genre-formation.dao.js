const connection = require('../database.js');

exports.getGenreFormation = () => {
    return new Promise((resolve, reject) => {
        const req = connection.query("SELECT * FROM article LEFT JOIN livre ON article.refArticle = livre.refArticle WHERE qteStock <> 0 AND livre.nomGenre = 'fantastique' LIMIT 5", (err, result) => {
            console.log(req.sql)
            err ? reject(err) : resolve(result);
        });
    });
};
