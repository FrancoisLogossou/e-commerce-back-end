const user = require("../models/personne");
const userDao = require('../dao/personne.dao');

exports.connexion = (req, res, next) => {
    const u = new user.Personne(
      req.body.idPersonne,
      req.body.nomPersonne,
      req.body.prenomPersonne,
      req.body.emailPersonne,
      req.body.mdpPersonne,
      req.body.typePersonne, 
    )
    userDao.getOneByEmailAndPassword(u.emailPersonne, u.mdpPersonne)
        .then(result => {
                return res.status(200).json(result[0]);
        })
        .catch(err => {
            return res.status(500).json({
                error: `problème de récupération de données: ${err}`
            });
        });
}