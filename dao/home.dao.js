const connection = require('../database.js');

exports.getAll = () => {
    return new Promise((resolve, reject) => {
        const req = connection.query("SELECT * FROM article WHERE qteStock <> 0", (err, result) => {
            console.log(req.sql)
            err ? reject(err) : resolve(result);
        });
    });
};
/*
INSERT INTO article (titreArticle, resumeArticle, puht, imageArticle, qteStock, idTauxTVA) 
VALUES 
('Harry Potter et Achref','Le jour de ses onze ans, Harry Potter, un orphelin élevé par un oncle et une tante qui le détestent, voit son existence bouleversée.',8.90, 'https://images-na.ssl-images-amazon.com/images/I/51TshoKNv1L._SX346_BO1,204,203,200_.jpg', 0, 1);

*/