const connection = require('../database.js');

exports.getAll = () => {
    return new Promise((resolve, reject) => {
        const req = connection.query("SELECT * FROM personne", (err, result) => {
            console.log(req.sql)
            err ? reject(err) : resolve(result);
        });
    });
};
exports.getOneById = (id) => {
    return new Promise((resolve, reject) => {
        const req = connection.query("SELECT * FROM personne WHERE num  = ? ", id, (err, result) => {
            console.log(req.sql)
            err || result.length == 0 ? reject(err) : resolve(result);
        });
    });
};

exports.add = (p) => {
    return new Promise((resolve, reject) => {
        const req = connection.query("INSERT INTO personne SET nom = ?, prenom = ?", [p.nom, p.prenom], (err, result) => {
                console.log(req.sql)
                err ? reject(err) : resolve(result);
            });
    });
};
exports.edit = (id, p) => {
    return new Promise((resolve, reject) => {
        const req = connection.query("UPDATE personne SET nom=?, prenom=? WHERE num = ?", [p.nom, p.prenom, id], (err,   result) => {
            console.log(req.sql)
            err || result.affectedRows == 0 ? reject(err) : resolve(result);
        });
    });
};
exports.delete = (id) => {
    return new Promise((resolve, reject) => {
        const req = connection.query("DELETE FROM personne WHERE num = ?", id, (err, result) => {
            console.log(req.sql)
            err || result.affectedRows == 0 ? reject(err) : resolve(result);
        });
    });
};
exports.getOneByUsernameAndPassword = (nom, prenom) => {
    return new Promise((resolve, reject) => {
        const req = connection.query("SELECT * FROM personne WHERE nom  = ? AND prenom = ? ", [nom, prenom], (err, result) => {
            console.log(req.sql)
            err  ? reject(err) : resolve(result);
        });
    });
};