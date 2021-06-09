const personne = require("../models/personne");
const personneDao = require('../dao/personne.dao');

exports.connexion = (req, res, next) => {
    const p = new personne.Personne(
        req.body.numUser,
        req.body.nomUser,
        req.body.prenomUser,
    );
    personneDao.getOneByUsernameAndPassword(p.nomUser, p.prenomUser)
        .then(result => {
                return res.status(200).json(result[0]);
        })
        .catch(err => {
            return res.status(500).json({
                error: `problème de récupération de données: ${err}`
            });
        });
}