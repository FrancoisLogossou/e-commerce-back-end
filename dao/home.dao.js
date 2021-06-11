const connection = require('../database.js');

exports.getAll = () => {
    return new Promise((resolve, reject) => {
        const req = connection.query("SELECT * FROM article WHERE qteStock <> 0", (err, result) => {
            console.log(req.sql)
            err ? reject(err) : resolve(result);
        });
    });
};
