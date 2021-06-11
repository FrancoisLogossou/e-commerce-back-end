const personne = require("../models/personne");
const personneDao = require('../dao/personne.dao');
const personneAdresseDao = require('../dao/personne-adresse.dao');
const adresseDao = require('../dao/adresse.dao');

exports.getAll = async (req, res, next) => {
    let personnes = await personneDao.getAll().catch(err => {
        return res.status(500).json({
            error: `problème de récupération de personnes: ${err}`
        })
    });
    for (let p of personnes) {
        p.adresses = await personneAdresseDao.getAllAdressesOfPersonne(p.num)
            .catch(err => {
                res.status(500).json({
                    error: `problème de récupération d'adresses : ${err}`
                });
            });
    }
    res.status(200).json(personnes);
}
exports.getOneById = async (req, res, next) => {
    const id = parseInt(req.params.id);
    let personnes = await personneDao.getOneById(id).catch(err => {
        return res.status(500).json({
            error: `Aucune personne avec l'identifiant ${id}`
        })
    });
    let p = personnes[0];
    p.adresses = await personneAdresseDao.getAllAdressesOfPersonne(p.num)
        .catch(err => {
            res.status(500).json({
                error: `problème de récupération d'adresses : ${err}`
            });
        });

    res.status(200).json(p);
}
exports.getAdressesByIdPersonne = (req, res, next) => {
    const id = parseInt(req.params.idPersonne);
    personneAdresseDao.getAllAdressesOfPersonne(id)
        .then(result => res.status(200).json(result))
        .catch(err => {
            res.status(500).json({
                error: `problème de récupération d'adresses : ${err}`
            });
        });
}
exports.getAdresseByIdPersonne = (req, res, next) => {
    const idPersonne = parseInt(req.params.idPersonne);
    const idAdresse = parseInt(req.params.idAdresse);
    personneAdresseDao.getOneAdresseOfPersonne(idPersonne, idAdresse)
        .then(result => res.status(200).json(result[0]))
        .catch(err => {
            res.status(500).json({
                error: `problème de récupération d'adresses : ${err}`
            });
        });
}
exports.add = (req, res, next) => {
    const p = new personne.Personne(
        req.body.idPersonne,
        req.body.nomPersonne,
        req.body.prenomPersonne,
        req.body.emailPersonne,
        req.body.mdpPersonne
    );
    personneDao.add(p)
        .then(result => {
            p.idPersonne = result.insertId;
            console.log(p);
            return res.status(201).json(p);
        })
        .catch(err => {
        return res.status(500).json({
            error: `problème d'insertion dans personne: ${err}`
        });
    });
}
exports.edit = async (req, res, next) => {
    const id = parseInt(req.params.id);
    const p = new personne.Personne(
        req.body.num,
        req.body.nom,
        req.body.prenom,
        req.body.adresses
    );
    await personneDao.edit(id, p)
    .then(async (result) => {
        await personneAdresseDao.deleteByIdPersonne(id)
            .catch(err => {
                return res.status(500).json({
                    error: `problème de suppression d'adresse : ${err}`
                });
            });
        for (let adresse of p.adresses) {
            if (!adresse.id) {
                let res = await adresseDao.add(adresse).catch(err => {
                    return res.status(500).json({
                        error: `problème d'insertion dans adresse: ${err}`
                    });
                });
                adresse.id = res.insertId;
            }
            await personneAdresseDao.add(p.num, adresse.id).catch(err => {
                return res.status(500).json({
                    error: `problème d'insertion dans  personne_adresse : ${err}`
                });
            });

        }
        return res.status(202).json(p);
    })
        .catch(err => {
            if (!err) {
                return res.status(404).json({
                    error: `Aucune personne avec l'identifiant ${id}`
                });
            }
            return res.status(500).json({
                error: `problème de modification de personne : ${err}`
            });
        });
}
exports.delete = async (req, res, next) => {
    const id = parseInt(req.params.id);
    await personneAdresseDao.deleteByIdPersonne(id)
        .catch(err => {
            return res.status(500).json({
                error: `problème de suppression d'adresse : ${err}`
            });
        });
    await personneDao.delete(id)
        .then(result => {
            return res.status(200).json({
                message: `personne avec l'identifiant ${id} supprimée avec succès`
            });
        })
        .catch(err => {
            if (!err) {
                return res.status(404).json({
                    error: `Aucune personne avec l'identifiant ${id}`
                });
            }
            return res.status(500).json({
                error: `problème de suppression de personne : ${err}`
            });
        });
}
