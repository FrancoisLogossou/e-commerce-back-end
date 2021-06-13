const connection = require('../database.js');


exports.getNouveautes = () => {
    return new Promise((resolve, reject) => {
        const req = connection.query("SELECT * FROM article  WHERE qteStock <> 0 ORDER BY refArticle DESC LIMIT 5", (err, result) => {
            console.log(req.sql)
            err ? reject(err) : resolve(result);
        });
    });
};
