const connection = require('../database.js');

// exports.getAll = () => {
//     return new Promise((resolve, reject) => {
//         const req = connection.query("SELECT * FROM user", (err, result) => {
//             console.log(req.sql)
//             err ? reject(err) : resolve(result);
//         });
//     });
// };
// exports.getOneById = (id) => {
//     return new Promise((resolve, reject) => {
//         const req = connection.query("SELECT * FROM user WHERE idUser = ? ", id, (err, result) => {
//             console.log(req.sql)
//             err || result.length == 0 ? reject(err) : resolve(result);
//         });
//     });
// };
exports.add = (p) => {
    return new Promise((resolve, reject) => {
        const req = connection.query("INSERT INTO user SET nomUser = ?, prenomUser = ?, emailUser = ?, motDePasseUser = ?", [p.nomPersonne, p.prenomPersonne, p.emailPersonne, p.mdpPersonne], (err, result) => {
                console.log(req.sql)
                err ? reject(err) : resolve(result);
        });
    });
};
// exports.edit = (id, p) => {
//     return new Promise((resolve, reject) => {
//         const req = connection.query("UPDATE user SET nomUser=?, prenomUser=? WHERE idUser = ?", [p.nomUser, p.prenomUser, id], (err,   result) => {
//             console.log(req.sql)
//             err || result.affectedRows == 0 ? reject(err) : resolve(result);
//         });
//     });
// };
// exports.delete = (id) => {
//     return new Promise((resolve, reject) => {
//         const req = connection.query("DELETE FROM user WHERE idUser = ?", id, (err, result) => {
//             console.log(req.sql)
//             err || result.affectedRows == 0 ? reject(err) : resolve(result);
//         });
//     });
// };
exports.getOneByEmailAndPassword = (emailUser, motdepasseUser) => {
    return new Promise((resolve, reject) => {
        const req = connection.query("SELECT * FROM user WHERE emailUser  = ? AND motDePasseUser = ? ", [emailUser, motdepasseUser], (err, result) => {
            console.log(req.sql)
            err  ? reject(err) : resolve(result);
        });
    });
};
