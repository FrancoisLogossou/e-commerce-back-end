const adresse = require("../models/adresse");
const adresseDao = require('../dao/adresse.dao');
const personneAdresseDao = require('../dao/personne-adresse.dao');

exports.getAll = (req, res, next) => {
    adresseDao.getAll()
        .then(result => res.status(200).json(result))
        .catch(err => {
            return res.status(500).json({
                error: `problème de récupération de donnees: ${err}`
            })
        });
}
exports.getOneById = (req, res, next) => {
    const idAdresse = parseInt(req.params.idAdresse);
    adresseDao.getOneById(idAdresse)
        .then(result => res.status(200).json(result[0]))
        .catch(err => {
            if (!err) {
                return res.status(404).json({
                    error: `Aucune adresse avec l'identifiant ${idAdresse}`
                });
            }
            return res.status(500).json({
                error: `problème de récupération de données : ${err}`
            });
        });
}
exports.add = (req, res, next) => {
    const a = new adresse.Adresse(
        req.body.idAdresse,
        req.body.rue,
        req.body.compltAdr,
        req.body.codePostal,
        req.body.ville
    );
    adresseDao.add(a)
        .then(result => {
            a.idAdresse = result.insertId;
            return res.status(201).json(a);
        })
        .catch(err => {
            return res.status(500).json({
                error: `problème d'insertion : ${err}`
            });
        });
}
exports.edit = (req, res, next) => {
    const idAdresse = parseInt(req.params.idAdresse);
    const a = new adresse.Adresse(
        req.body.idAdresse,
        req.body.rue,
        req.body.compltAdr,
        req.body.codePostal,
        req.body.ville
    );
    adresseDao.edit(idAdresse, a)
        .then(result => {
            return res.status(200).json({
                message: `adresse avec l'identifiant ${idAdresse} modifiée avec succès`
            });
        })
        .catch(err => {
            if (!err) {
                return res.status(404).json({
                    error: `Aucune adresse avec l'identifiant ${idAdresse}`
                });
            }
            return res.status(500).json({
                error: `problème de mise à jour : ${err}`
            });
        });
}
exports.delete = (req, res, next) => {
    const idAdresse = parseInt(req.params.idAdresse);
    personneAdresseDao.deleteByIdAdresse(idAdresse)
        .then((result) => {
            adresseDao.delete(idAdresse)
                .then(result => {
                    return res.status(200).json({
                        message: `adresse avec l'identifiant ${idAdresse} supprimée avec succès`
                    });
                })
                .catch(err => {
                    if (!err) {
                        return res.status(404).json({
                            error: `Aucune adresse avec l'identifiant ${idAdresse}`
                        });
                    }
                    return res.status(500).json({
                        error: `problème de suppression : ${err}`
                    });
                });
        })
        .catch(err => {
            return res.status(500).json({
                error: `problème de suppression dans personne_adresse : ${err}`
            });
        })
}